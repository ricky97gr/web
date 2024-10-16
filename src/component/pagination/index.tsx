import React from "react";
import { Pagination } from "antd";

const PaginationComponent = ({
  total,
  current,
  pageSize,
  onChange,
}) => {
  return (
    <Pagination
      total={total}
      current={current}
      defaultPageSize={pageSize}
      showSizeChanger={true}
      showTotal={(total) => `总计 ${total} 条`}
      onChange={onChange}
      locale={{ items_per_page: "条/页", page: "页" }}
    />
  );
};

export default PaginationComponent;