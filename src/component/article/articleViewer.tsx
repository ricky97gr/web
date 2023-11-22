import { Editor, Viewer } from "@bytemd/react";
import React, { useState } from "react";

import 'bytemd/dist/index.css'
import 'github-markdown-css'

const ViewMd = () => {
  const [value, setValue] = useState('')

  const context = `## kube-scheduler
  scheduler在k8s中是一个调度者的身份，监听pod和node的信息，来调度具体哪个pod应该在哪个node上。以下图所示，输入为要生成的pod list以及环境中的node list，输出是node 和pod的绑定关系。
  ![](https://www.qikqiak.com/img/posts/kube-scheduler-structrue.jpg)
  
  在实际生产过程中，由于需要考虑到各种场景，那么调度的策略也是各种各样的，比如节点是否在线，负载是什么样的，节点的亲和度，pod之间的亲和度等等这些问题。总体来说，这些调度策略可以分为两类，一类是预选策略，一类是优选策略。
  
  - 预选阶段首先遍历全部节点，过滤掉不满足条件的节点，属于强制性规则，这一阶段输出的所有满足要求的 Node 将被记录并作为第二阶段的输入，如果所有的节点都不满足条件，那么 Pod 将会一直处于 Pending 状态，直到有节点满足条件，在这期间调度器会不断的重试
  
  比如节点的资源是否满足，yaml文件中如果指定了node name，NodeName 是否满足等等。
  - 优选阶段即再次对节点进行筛选，如果有多个节点都满足条件的话，那么系统会按照节点的优先级(priorites)大小对节点进行排序，最后选择优先级最高的节点来部署 Pod 应用
  
  比如 cpu和内存的利用率；节点的亲和度
  
  __思考：任务型的模块是否可以参考__
  
  ## pod的一个比较详细的流程
  
  
  
  ## 源码解析
  1. 通过一个frameWork接口，实现。所有的代码都是通过以插件的形式加载进去，对后续支持很友好
  2. 通过KubeSchedulerConfig加载配置，需要手动配置一个yaml文件，scheduler会解析（启动时会解析）。
  
  - 启动时在init中注册
 
  - 可以考虑使用set
  本质上是map。通过封装实现了set的功能
  `

  return (
    <Viewer
      value={context}

    // plugins={plugins}

    />
  )
}

export default ViewMd