import React, { Children, Component, useState } from "react";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CustomEditor from "../../component/editor/my-editor";

interface NewArticleDrawerProps {
  isOpen: boolean;
  title: string;
  UpdateValue: Function;
  children;
}

type FieldType = {
  title: string;
  intro: string;
  category: string;
  tags: string[];
  isoriginal: boolean;

  picture: string;
  context: string;
};
const tagsoptions = [
  { value: "gold" },
  { value: "lime" },
  { value: "green" },
  { value: "cyan" },
];

class CustomDrawer extends Component<NewArticleDrawerProps> {
  updateParent = () => {
    this.props.UpdateValue(false);
    return false;
  };
  render(): React.ReactNode {
    return (
      <>
        <Drawer
          title={this.props.title}
          placement="right"
          open={this.props.isOpen}
          closable={false}
          destroyOnClose={true}
        >
          {this.props.children}
        </Drawer>
      </>
    );
  }
}

export default CustomDrawer;
