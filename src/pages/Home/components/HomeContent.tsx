import React, { FC } from 'react'
import styles from './HomeContent.module.scss'
import { ConfigProvider, Divider, Pagination, Space, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import { FILE_PAGE_PATH } from '../../../router'
// import { CLIENT_URL } from '../../../constant'
import { FilePageType } from '../../../utils/filePageType'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
// import { useRequest } from 'ahooks'
// import { addPapersHits } from '../../../service/file'
import globalStyles from '../../../styles/styles.module.scss'

type PropsType = {
  tagDir: FilePageType[]
  filePageList: FilePageType[]
  fatherPath: string
  total: number
  pageSize: number
  current: number
  handlerTagClick: (path: string) => void
  handlePageSizeChange: (page: number, pageSize: number) => void
}

const HomeContent: FC<PropsType> = (props: PropsType) => {
  const {
    tagDir = [],
    filePageList = [],
    fatherPath = '',
    total = 0,
    current = 1,
    pageSize = 10,
    handlerTagClick,
    handlePageSizeChange,
  } = props
  // const nav = useNavigate()

  const pageList = filePageList

  const array = fatherPath.split('/').filter(a => a != '')
  const breadItems = [
    {
      title: '全部',
      filePath: '',
    },
  ]
  let breadItemsPath = ''

  const theme = {
    token: {
      colorPrimary: globalStyles.headColor,
    },
  }

  for (let i = 0; i < array.length; i++) {
    breadItemsPath = breadItemsPath + '/' + array[i]
    breadItems.push({
      title: array[i],
      filePath: breadItemsPath,
    })
  }

  function handlerBreadcrumbItemsClick(item: any) {
    handlerTagClick(item.filePath)
  }

  return (
    <>
      <div style={{ display: tagDir.length > 0 ? '' : 'none' }}>
        <Space align="center" className={styles.tagWrapper} size={[0, 'small']} wrap>
          {tagDir.map((tag, index) => {
            return (
              <Tag
                className={styles.tag}
                key={index}
                bordered={false}
                onClick={() => {
                  handlerTagClick(tag.filePath)
                }}
              >
                {tag.name}({tag.length})
              </Tag>
            )
          })}
        </Space>
        <Divider style={{ margin: '0' }} dashed />
      </div>

      <div className={styles.Breadcrumb}>
        {breadItems.map((item, index) => {
          return (
            <span key={index}>
              <span
                className={styles.BreadcrumbItem}
                onClick={() => {
                  handlerBreadcrumbItemsClick(item)
                }}
              >
                {item.title}
              </span>
              <span> / </span>
            </span>
          )
        })}
      </div>
      <div
        className={styles.listWrapper}
        style={{ height: tagDir.length > 0 ? 'calc(100% - 125px)' : 'calc(100% - 55px)' }}
      >
        {pageList.map((page, index) => {
          return (
            <div className={styles.page} key={index}>
              {/* <Title className={styles.pageTitle} level={3}>
                {page.name}
              </Title> */}
              <Link target="_blank" to={`${FILE_PAGE_PATH}${page.name}?filePath=${page.filePath}`}>
                <Title className={styles.pageTitle} level={3}>
                  {page.name}
                </Title>
              </Link>
              <div className={styles.pageDesc}>
                <span className={styles.key}>摘要：</span>
                <span>{page.desc}</span>
              </div>
              <div className={styles.info}>
                <span>{page.birthtime?.slice(0, 10)}</span>
                <span>
                  <EyeOutlined></EyeOutlined>
                  {page.hitsCount}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.paginationWrapper}>
        <ConfigProvider theme={theme}>
          <Pagination
            className={styles.pagination}
            showSizeChanger
            size="small"
            current={current}
            pageSize={pageSize}
            total={total}
            pageSizeOptions={[5, 10, 15, 20]}
            onChange={handlePageSizeChange}
          />
        </ConfigProvider>
      </div>
    </>
  )
}

export default HomeContent
