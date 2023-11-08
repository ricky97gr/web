import type { MenuProps } from "antd";
import React, { Component, useState } from "react";
import NewArticleDrawer from "../../view/article/new-article";
import CustomDropDown from "../base/my-dropdown";


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <span>创作文章</span>
        ),
    },
    {
        key: '2',
        label: (
            <span>发布动态</span>
        ),
    },
    {
        key: '3',
        label: (
            <span>发表面经</span>
        ),

    },
];



const NewArticleDropDwon = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>()
    const onclick = () => {
        setIsOpen(true)
    }

    return (
        <>
            <CustomDropDown items={items} onClick={onclick} children={children}></CustomDropDown>
            <NewArticleDrawer isOpen={isOpen} setIsOpen={setIsOpen}></NewArticleDrawer>

        </>

    )
}

export default NewArticleDropDwon