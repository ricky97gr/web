
import React from "react";
import { Input } from "antd";

const { Search } = Input;
function onSearch() {
    return
}

const CustomSearch = () => {
    return (
        <Search
            placeholder="搜索感兴趣的内容吧"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
        />
    )
}

export default CustomSearch;