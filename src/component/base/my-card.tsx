import React from 'react';
import { Card } from 'antd';
import './my-card.css'

const CustomCard = ({ children }) => {
    return (
        <Card >
            {children}
        </Card>
    )
}

export default CustomCard;