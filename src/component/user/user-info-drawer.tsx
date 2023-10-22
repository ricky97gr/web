import React, { Component } from "react"
import { Button, ConfigProvider, Drawer, Tabs, TabsProps } from "antd"
import "./user-info-drawer.css"
import UserInfoForm from "./usermenu/user-info"
import UserAccountTable from "./usermenu/user-account"
import CustomEmpty from "../base/my-empry"

interface UserInfoDrawerProps {
  isOpen: boolean
  UpdateValue: Function
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: "个人中心",
    children: UserInfoForm
  },
  {
    key: '2',
    label: "账号绑定",
    children: UserAccountTable
  },
  {
    key: '3',
    label: "我的评论",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '4',
    label: "我的回复",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '5',
    label: "我的文章",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '6',
    label: "我的回答",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '7',
    label: "我的收藏",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '8',
    label: "我的勋章",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>
  },
  {
    key: '9',
    label: "我的反馈",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>

  },
  {
    key: '10',
    label: "我的积分",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>

  },
  {
    key: '11',
    label: "修改密码",
    children: <div className="custom-empty"><CustomEmpty context="好空，加点东西?"></CustomEmpty></div>


  },
]
class UserInfoDrawer extends Component<UserInfoDrawerProps>{

  onClose = () => {
    return false
  }
  updateParent = () => {
    this.props.UpdateValue(false)
  }

  render() {
    let isOpen = this.props.isOpen
    console.log("userinfodrawer:", isOpen)

    return (
      <ConfigProvider theme={{
        token: {
          paddingLG: 0,

        }
      }
      }>
        <Drawer placement="right" onClose={this.updateParent} open={isOpen} width={640} closable={false}>
          <div className="tag-is-left">
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    cardBg: "#ddd",
                    inkBarColor: "grey",
                    paddingLG: 24,
                  }
                },

              }}>
              <Tabs tabPosition="left" items={items} style={{ height: "100%" }}></Tabs>
            </ConfigProvider>
          </div>
        </Drawer>
      </ConfigProvider>

    )
  }

}

export default UserInfoDrawer