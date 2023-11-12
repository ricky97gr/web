import { AudioOutlined, ContainerOutlined, FileTextOutlined, TagOutlined, TagsOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Card, Col, Divider, List, Row, Statistic, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Column, Line, Pie } from '@ant-design/plots';
import { Bar } from '@ant-design/charts';
import { myFetch } from '../../utils/fetch';


type statisticCountInfo = {
  tagTotal: number
  topicTotal: number
  categoryTotal: number
  articleTotal: number
  shortCommentTotal: number
}


const AdminHome = () => {

  const [statisticCounts, setStatisticCounts] = useState<statisticCountInfo>({ tagTotal: 0, topicTotal: 0, categoryTotal: 0, articleTotal: 0, shortCommentTotal: 0 })
  const getCounts = () => {
    myFetch({
      url: "/admin/statistic/counts",
      options: { method: "GET" }
    }).then((data) => {
      setStatisticCounts(data.body.result)
    })
  }
  useEffect(() => {
    getCounts();
    getUserTrend();
    getArticleTrend();
    getTagTop5();
    getTopicTop5()
    getCategoryTop5()
  }, [])

  const [statisticUserTrend, setStatisticUserTrend] = useState([])
  const [statisticArticleTrend, setStatisticArticleTrend] = useState([])

  const getUserTrend = () => {
    myFetch({
      url: "/admin/statistic/usertrend",
      options: { method: "GET" }
    }).then((data) => {
      setStatisticUserTrend(data.body.result)
    })
  }

  const getArticleTrend = () => {
    myFetch({
      url: "/admin/statistic/articletrend",
      options: { method: "GET" }
    }).then((data) => {
      setStatisticArticleTrend(data.body.result)
    })
  }
  const getTagTop5 = () => {
    myFetch({
      url: "/admin/statistic/tagtop5",
      options: { method: "GET" }
    }).then((data) => {

      setTagTopData(data.body.result)
    })
  }
  const getTopicTop5 = () => {
    myFetch({
      url: "/admin/statistic/topictop5",
      options: { method: "GET" }
    }).then((data) => {

      setTopicTopData(data.body.result)
    })
  }
  const getCategoryTop5 = () => {
    myFetch({
      url: "/admin/statistic/categorytop5",
      options: { method: "GET" }
    }).then((data) => {
      setCategoryTopData(data.body.result)
    })
  }

  const [topicTopData, setTopicTopData] = useState([])
  const topicTopConfig = {
    data: topicTopData,
    xField: 'name',
    yField: 'usedCount',
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
      usedCount: {
        alias: "短评引用数"
      }
    }
  }

  const [tagTopData, setTagTopData] = useState([])
  const tagTopConfig = {
    data: tagTopData,
    xField: 'name',
    yField: 'usedCount',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "标签名"
      },
      usedCount: {
        alias: "文章引用数"
      }
    }
  }

  const [categoryTopData, setCategoryTopData] = useState([])
  const categoryTopConfig = {
    data: categoryTopData,
    xField: 'name',
    yField: 'usedCount',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "分类名"
      },
      usedCount: {
        alias: "文章引用数"
      }
    }
  }

  const weekNewUserConfig = {
    data: statisticUserTrend,
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
        alias: "时间"
      },
      count: {
        alias: "新增用户数"
      }
    }
  }

  const weekNewArticleConfig = {
    data: statisticArticleTrend,
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
        alias: "时间"
      },
      count: {
        alias: "新增文章数"
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
                <Statistic title="标签总数" value={statisticCounts.tagTotal} prefix={<TagsOutlined />}></Statistic>
              </Col>

              <Col span={6}>
                <Statistic title="类别总数" value={statisticCounts.categoryTotal} prefix={<UnorderedListOutlined />}></Statistic>
              </Col>

              <Col span={6}>
                <Statistic title="话题总数" value={statisticCounts.topicTotal} prefix={<AudioOutlined />}></Statistic>
              </Col>

              <Col span={6}>
                <Statistic title="短评总数" value={statisticCounts.shortCommentTotal} prefix={<ContainerOutlined />}></Statistic>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} style={{ padding: 5 }}>
          <Card style={{ height: 100 }}>
            <Statistic title=" 文章总数" value={statisticCounts.articleTotal} prefix={<FileTextOutlined />}></Statistic>
          </Card>
        </Col>
      </Row>

      <Row style={{ padding: 5, }}>
        <Col style={{ padding: 5, }} span={12}>
          <Card title="近一周用户新增趋势">
            <Line {...weekNewUserConfig} style={{ height: 160 }}></Line>
          </Card>``
        </Col>
        <Col style={{ padding: 5, }} span={12}>
          <Card title="近一周文章新增趋势">
            <Line {...weekNewArticleConfig} style={{ height: 160 }}></Line>
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
            <Column {...categoryTopConfig} style={{ height: 160 }} />
          </Card>
        </Col>
        <Col span={8} style={{ padding: 5 }}>
          <Card title="标签使用频率TOP5">
            <Column {...tagTopConfig} style={{ height: 160 }} />
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