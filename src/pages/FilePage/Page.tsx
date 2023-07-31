import React, { FC, useEffect, useState } from 'react'
import FilePage from './FilePage'
import { FloatButton, Layout, Popover, QRCode, Spin } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import Outline, { TOCType } from './Outline'
import styles from './Page.module.scss'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { addPapersHits, getFileService } from '../../service/file'
import { GithubOutlined, VerticalAlignTopOutlined, WechatOutlined } from '@ant-design/icons'
import { GIT_HUB_URL, WECHAT_URL } from '../../constant'

const Page: FC = () => {
  const nav = useNavigate()
  const [html, setHtml] = useState('')
  const [toc, setToc] = useState<TOCType>([])
  const [searchParams] = useSearchParams()
  const filePath = searchParams.get('filePath') || ''
  // console.log(filePath)

  useEffect(() => {
    // TODO：生成大纲目录
    const tocArray = []
    const repeatRegex = /<(h\d).*?>.*?<\/h\d>/g
    const idRegex = /id=".+"/
    const nameRegex = /<\/a>.+<\/h\d>/

    let dataStrRexArr
    while ((dataStrRexArr = repeatRegex.exec(html))) {
      // 提取 ID
      const idArray = idRegex.exec(dataStrRexArr[0])
      let id = ''
      if (idArray) {
        id = idArray[0].slice(4, idArray[0].length - 1)
      }

      // 提取 name
      const nameArray = nameRegex.exec(dataStrRexArr[0])
      let name = ''
      if (nameArray) {
        name = nameArray[0].slice(4, nameArray[0].length - 5)
      }

      if (id) {
        tocArray.push({
          level: dataStrRexArr[1],
          name: name,
          id: id,
          str: dataStrRexArr[0],
        })
      }
    }
    // console.log(tocArray)
    setToc(tocArray)
  }, [html])

  // 请求 .md 数据
  const { loading } = useRequest(
    async () => {
      const res = await getFileService(filePath)
      return res
    },
    {
      onSuccess(res) {
        if (res) {
          setHtml(res.html)
        } else {
          nav('404')
        }
      },
      // onError() {
      //   nav('404')
      // },
    }
  )

  const { loading: addHitsLoading } = useRequest(
    async () => {
      const res = await addPapersHits(filePath)
      return res
    },
    {
      onSuccess(res) {
        // const { msg } = res
        // console.log(msg)
      },
    }
  )

  return (
    <Spin spinning={loading} size="large" tip="加载中...">
      <Layout className={styles.wrapper} hasSider>
        <Sider className={styles.sider}>
          <Outline toc={toc} />
        </Sider>
        <Content id="top" className={styles.content}>
          <FilePage html={html}></FilePage>
        </Content>
        <FloatButton.Group shape="circle" style={{ right: 24 }}>
          <FloatButton target="_blank" href={GIT_HUB_URL} icon={<GithubOutlined />} />
          <Popover
            placement="left"
            overlayInnerStyle={{ padding: 0 }}
            content={<QRCode value={WECHAT_URL} />}
          >
            <FloatButton icon={<WechatOutlined />} />
          </Popover>
          <FloatButton href="#output" icon={<VerticalAlignTopOutlined />} />
        </FloatButton.Group>
      </Layout>
    </Spin>
  )
}

export default Page
