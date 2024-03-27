

const MyQuery = ({
    page = 1,
    pageSize = 20,
    cons = [],
    sorts = [],
}) => {
    let query = new Object()
    query["page"] = page
    query["pageSize"] = pageSize
    query["conditions"] = cons
    query["sorts"] = sorts

    return query
}

export default MyQuery