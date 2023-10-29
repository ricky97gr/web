const config = {
  apiPath: "/api/",
  networkErrorCode: 1000,
  isErrorResponse: (res, body) => res.ok,
  exceptionData: (res, body) => body,
};

const wrapFetchOptions = (option) => {
  let { body, ...rest } = option;
  let options;
  if (body) {
    if (typeof body === "object") {
      body = JSON.stringify(body);
    }
    options = { body, ...rest };
  } else {
    options = { ...rest };
  }
  return {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };
};

const isJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
};

const addParamsToUrl = (url, params) => {
  if (typeof params === "object" && params !== null) {
    const urlParams = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = typeof value === "object" ? JSON.stringify(value) : value;
        return acc;
      }, {})
    );
    const splitor = url.indexOf("?") === -1 ? "?" : "&";
    return url + splitor + urlParams.toString();
  } else {
    return url;
  }
};
const createTimeoutPromise = (ms) =>
  new Promise((_, reject) => setTimeout(() => reject("timeout"), ms));

const myFetch =async ({
  url,
  options,
  timeout = 0,
  params,
  dataFormat = (_) => _,
  apiPath = "",
}) => {
  try {
    const fetchPromise = fetch(
      (apiPath || config.apiPath) + addParamsToUrl(url, params),
      wrapFetchOptions(options)
    );
    let response;
    if (timeout > 0) {
      response = await Promise.race([
        fetchPromise,
        createTimeoutPromise(timeout),
      ]);
    } else {
      response = await fetchPromise;
    }

    let body;
    if (
      response.headers.get("content-type") &&
      response.headers.get("content-type").indexOf("json") >= 0
    ) {
      body = await response.json();
    } else {
      body = await response.text();
      if (isJson(body)) {
        body = JSON.parse(body);
      } else {
        if (!response.ok) {
          return {
            ok: false,
            body: {
              code: config.networkErrorCode,
              msg: body,
              status: response.status,
            },
          };
        } else {
          return {
            ok: config.isErrorResponse(response, body),
            body: body,
          };
        }
      }
    }

    const ok = config.isErrorResponse(response, body);
    return {
      ok,
      body: config.isErrorResponse(response, body)
        ? dataFormat(body)
        : config.exceptionData(response, body),
    };
  } catch (err) {
    return { ok: false, body: { code: config.networkErrorCode } };
  }
};
