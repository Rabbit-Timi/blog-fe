import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { FC, useEffect, useState } from 'react'
import styles from './HomeLayout.module.scss'
import HomeSide from '../components/HomeSide'
import HomeHead from '../components/HomeHead'
import HomeContent from '../components/HomeContent'
import { useRequest } from 'ahooks'
import { getDirectoryService, getFileListService, getTagsService } from '../../../service/file'
import { FilePageType } from '../../../utils/filePageType'

const HomeLayout: FC = () => {
  const [sideDir, setSideDir] = useState<FilePageType[]>([])
  const [tagDir, setTagDir] = useState<FilePageType[]>([])
  const [filePageList, setFilePageList] = useState<FilePageType[]>([])
  const [total, setTotal] = useState(0)
  const [fatherPath, setFatherPath] = useState('')
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const { loading: loadingSideDir } = useRequest(
    async () => {
      const res = await getDirectoryService()
      return res
    },
    {
      // refreshDeps: [page, pageSize],
      onSuccess(res) {
        const { dir } = res
        setSideDir(dir as FilePageType[])
      },
    }
  )

  const { run: changeTags, loading: loadingTags } = useRequest(
    async path => {
      const res = await getTagsService(path)
      return res
    },
    {
      manual: true,
      onSuccess(res) {
        const { tagDir } = res
        setTagDir(tagDir as FilePageType[])
      },
    }
  )

  const { run: getFileList, loading: loadingFileList } = useRequest(
    async (path: string, pageSize?: number, pageNum?: number) => {
      setFatherPath(path)
      const res = await getFileListService(path, pageSize, pageNum)
      return res
    },
    {
      onSuccess(res) {
        const { fileList, total } = res
        setFilePageList(fileList as FilePageType[])
        setTotal(total)
      },
    }
  )

  useEffect(() => {
    getFileList(fatherPath, pageSize, current)
  }, [current, pageSize, fatherPath])

  function handlePageSizeChange(page: number, pageSize: number) {
    setCurrent(page)
    setPageSize(pageSize)
  }

  function handlerTagClick(path: string) {
    changeTags(path)
    setFatherPath(path)
    setCurrent(1)
  }

  return (
    <Layout
      className={styles.wrapper}
      aria-disabled={loadingFileList && loadingSideDir && loadingTags}
    >
      <Header className={styles.headerStyle}>
        <HomeHead />
      </Header>
      <Layout hasSider className={styles.mainStyle}>
        <Sider className={styles.siderStyle}>
          <HomeSide sideDir={sideDir} handlerTagClick={handlerTagClick} />
        </Sider>
        <Content className={styles.contentStyle}>
          <HomeContent
            tagDir={tagDir}
            filePageList={filePageList}
            total={total}
            fatherPath={fatherPath}
            pageSize={pageSize}
            current={current}
            handlePageSizeChange={handlePageSizeChange}
            handlerTagClick={handlerTagClick}
          />
        </Content>
      </Layout>
      <Footer className={styles.footerStyle}>Copyright © 2023</Footer>
    </Layout>
  )
}

export default HomeLayout
