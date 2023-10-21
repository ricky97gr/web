
import { Empty } from "antd";
import React, { Component } from "react";

interface CustomEmptyProps{
    image ?:string
    context ?: string
}

class CustomEmpty extends Component<CustomEmptyProps>{
    render(): React.ReactNode {
        return(
            <Empty image={this.props.image}
            description={this.props.context}></Empty>
        )
    }
}

export default CustomEmpty;