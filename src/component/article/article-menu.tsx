import type { MenuProps } from "antd";
import React, { Component } from "react";
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

interface NewArticleDropDwonProps {
    children?: any
}

class NewArticleDropDwon extends Component<NewArticleDropDwonProps>{
    state = {
        isOpen: false,
    }

    onclick = ({ key }) => {
        console.log(key)
        if (key === '1') {
            this.setState(() => ({
                isOpen: true
            }));
        }
    }
    udpateIsOpen = (open) => {
        this.setState(() => ({
            isOpen: open
        }));
    }


    render() {
        return (
            <>
                <CustomDropDown items={items} children={this.props.children} onClick={this.onclick}></CustomDropDown>
                <NewArticleDrawer isOpen={this.state.isOpen} UpdateValue={this.udpateIsOpen}></NewArticleDrawer>

            </>

        )
    }
}
export default NewArticleDropDwon