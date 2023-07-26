import React, { FC, useState } from 'react'
import FilePage from './FilePage'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import Outline, { TOCType } from './Outline'
import styles from './Page.module.scss'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { addPapersHits, getFileService } from '../../service/file'

const Page: FC = () => {
  const nav = useNavigate()
  // const { name = '' } = useParams()
  const [html, setHtml] = useState('')
  const [toc, setToc] = useState<TOCType>([])
  const [searchParams] = useSearchParams()
  const filePath = searchParams.get('filePath') || ''
  // console.log(filePath)

  // 请求 .md 数据
  useRequest(async () => await getFileService(filePath), {
    onSuccess(res) {
      if (res) {
        setHtml(res.html)

        // TODO：生成大纲目录
        const tocArray = []
        const repeatRegex = /<(h\d).*?>.*?<\/h\d>/g
        const idRegex = /id=".+"/
        const nameRegex = /<\/a>.+<\/h\d>/

        let dataStrRexArr
        while ((dataStrRexArr = repeatRegex.exec(res.html))) {
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
      } else {
        nav('404')
      }
    },
  })

  useRequest(
    async (path: string) => {
      const res = await addPapersHits(path)
      return res
    },
    {
      manual: true,
      onSuccess(res) {
        const { msg } = res
        console.log(msg)
      },
    }
  )

  return (
    <Layout className={styles.wrapper} hasSider>
      <Sider className={styles.sider}>
        <Outline toc={toc} />
      </Sider>
      <Content className={styles.content}>
        <FilePage html={html}></FilePage>
      </Content>
    </Layout>
  )
}

export default Page
