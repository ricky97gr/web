import { TagOutlined } from '@ant-design/icons';
import { Card, Col, Divider, List, Row, Table } from 'antd';
import React from 'react';
import { Column, Line, Pie } from '@ant-design/plots';
import { Bar } from '@ant-design/charts';




const AdminHome = () => {
  const topicTopData = [
    { name: "name", count: 2 },
    { name: "name1", count: 2 },
    { name: "name2", count: 2 },
    { name: "name3", count: 2 },
    { name: "name4", count: 2 },

  ]
  const topicTopConfig = {
    data: topicTopData,
    xField: 'name',
    yField: 'count',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "话题名"
      },
      count: {
        alias: "短评引用数"
      }
    }
  }

  const weekNewUserData = [
    { date: "一天前", count: 2 },
    { date: "name1", count: 2 },
    { date: "name2", count: 5 },
    { date: "name3", count: 1 },
    { date: "name4", count: 2 },
    { date: "一天前1", count: 7 },
    { date: "一天前2", count: 15 },

  ]
  const weekNewUserConfig = {
    data: weekNewUserData,
    xField: 'date',
    yField: 'count',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "话题名"
      },
      count: {
        alias: "短评引用数"
      }
    }
  }

  const userScoreColums = [
    {
      title: "用户名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "积分",
      dataIndex: "score",
      key: "score"
    },]

  const userScoreData = [
    { "name": "超级管理员", score: 10 },
    { "name": "普通用户", score: 1 }
  ]

  const userMonthActiveData = [
    { type: "avtice", value: 8 },
    { type: "inAvtice", value: 2 },
  ]
  const userMonthActiveConfig = {
    data: userMonthActiveData,
    appendPadding: 5,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,

    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },

      },
    },
  }

  const userTypeData = [
    { type: "超级管理员", count: 1 },
    { type: "普通管理员", count: 2 },
    { type: "普通用户", count: 10 },
  ]
  const userTypeConfig = {
    data: userTypeData,
    xField: 'count',
    yField: 'type',
    seriesField: 'type',
    //分类
    legend: {
      position: "top-left" as "top-left",
    },
  };


  return (
    <>
      <Row style={{ padding: 5 }}>
        <Col span={18} style={{ padding: 5 }}>
          <Card style={{ height: 100 }} bordered={false}>
            <Row>
              <Col span={6}>
                <span style={{ fontSize: 18 }}><TagOutlined />标签总数</span>
                <br />
                <span style={{}}>0</span>
              </Col>

              <Col span={6}>
                <span style={{ fontSize: 18 }}>类别总数</span>
                <br />

                <span style={{}}>0</span>
              </Col>

              <Col span={6}>
                <span style={{ fontSize: 18 }}>话题总数</span>
                <br />

                <span style={{}}>0</span>
              </Col>

              <Col span={6}>
                <span style={{ fontSize: 18 }}>短评总数</span>
                <br />

                <span style={{}}>0</span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} style={{ padding: 5 }}>
          <Card style={{ height: 100 }}>
            <span style={{ fontSize: 18 }}>文章总数</span>
            <br />
            <span style={{}}>0</span>
          </Card>
        </Col>
      </Row>

      <Row style={{ padding: 5, }}>
        <Col style={{ padding: 5, }} span={12}>
          <Card title="近一周用户新增趋势">
            <Line {...weekNewUserConfig} style={{ height: 160 }}></Line>
          </Card>
        </Col>
        <Col style={{ padding: 5, }} span={12}>
          <Card title="近一周文章新增趋势">
            <Line {...weekNewUserConfig} style={{ height: 160 }}></Line>
          </Card>
        </Col>
      </Row>

      <Row style={{ padding: 5, }}>
        <Col span={8} style={{ padding: 5 }}>
          <Card title="话题热度TOP5">
            <Column {...topicTopConfig} style={{ height: 160 }} />

          </Card>
        </Col>
        <Col span={8} style={{ padding: 5 }}>
          <Card title="文章分类TOP5">
            <Column {...topicTopConfig} style={{ height: 160 }} />
          </Card>
        </Col>
        <Col span={8} style={{ padding: 5 }}>
          <Card title="标签使用频率TOP5">
            <Column {...topicTopConfig} style={{ height: 160 }} />
          </Card>
        </Col>
      </Row>
      <Row style={{ padding: 5, }}>
        <Col style={{ padding: 5, }} span={12}>
          <Card title="用户积分排行榜">
            <Table columns={userScoreColums} dataSource={userScoreData} style={{ height: 160 }} pagination={{ hideOnSinglePage: true }}></Table>
          </Card>
        </Col>
        <Col style={{ padding: 5, }} span={6}>
          <Card title="近30天用户活跃情况">
            <Pie {...userMonthActiveConfig} style={{ height: 160 }} />
          </Card>
        </Col>
        <Col style={{ padding: 5, }} span={6}>
          <Card title="用户分类统计">
            <Bar {...userTypeConfig} style={{ height: 160 }} />
          </Card>
        </Col>
      </Row>


    </>
  )
}

export default AdminHome