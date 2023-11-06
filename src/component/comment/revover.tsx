import React from "react";

const CustomRecover = ({ author, level, ip, createTime, children }) => {
    return (
        <> <div className='card-left'>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
        </div>
            <div className='card-right'>
                <div className='right-top'>
                    <a >
                        <span style={{ margin: 10 }}>{author}</span>
                    </a>

                    <span className='userField' style={{ margin: 5 }}>{level}</span>
                    <span className='userField' style={{ margin: 5 }}>ip属地:{ip}</span>
                    <span className='userField' style={{ margin: 5 }}>{createTime}</span>

                </div>
                <div className='right-center'>{children}</div>
                <div className='right-buttom'>
                    <span style={{ margin: 4 }}>回复</span>
                    <span style={{ margin: 4 }}>举报</span>
                    <span style={{ margin: 4 }}>👍赞</span>
                    <span style={{ margin: 4 }}>👎踩</span>
                </div>
            </div>
        </>
    )

}

export default CustomRecover;