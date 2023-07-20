import React, { FC, useEffect, useState } from 'react'
import styles from './HomeContent.module.scss'
import { Breadcrumb, Divider, Pagination, Space, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import { FILE_PAGE_PATH } from '../../../router'
import { CLIENT_URL } from '../../../constant'
import { FilePageType } from '../../../utils/filePageType'

type PropsType = {
  tagDir: FilePageType[]
  filePageList: FilePageType[]
  fatherPath: string
  total: number
  handlerPageChange: (path: string, pageSize?: number, pageNum?: number) => void
  handlerTagClick: (path: string) => void
}

const HomeContent: FC<PropsType> = (props: PropsType) => {
  const {
    tagDir = [],
    filePageList = [],
    fatherPath = '',
    total = 0,
    handlerTagClick,
    handlerPageChange,
  } = props
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)
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
  for (let i = 0; i < array.length; i++) {
    breadItemsPath = breadItemsPath + '/' + array[i]
    breadItems.push({
      title: array[i],
      filePath: breadItemsPath,
    })
  }

  console.log(breadItems)

  function PageTitleHandlerClick(page: FilePageType) {
    const { name, filePath } = page
    const w = window.open('about:blank')
    if (w) w.location.href = `${CLIENT_URL}${FILE_PAGE_PATH}${name}?filePath=${filePath}`
    // nav(`${FILE_PAGE_PATH}${name}?filePath=${filePath}`)
  }

  useEffect(() => {
    handlerPageChange(fatherPath, pageSize, current)
  }, [current, pageSize])

  function handlePageChange(page: number, pageSize: number) {
    setCurrent(page)
    setPageSize(pageSize)
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
            <div
              className={styles.page}
              key={index}
              onClick={() => {
                PageTitleHandlerClick(page)
              }}
            >
              <Title className={styles.pageTitle} level={3}>
                {page.name}
              </Title>
              <div className={styles.pageDesc}>
                <span style={{ color: '#b0d5df' }}>摘要：</span>
                <span>{page.desc}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination
          className={styles.pagination}
          showSizeChanger
          size="small"
          current={current}
          pageSize={pageSize}
          total={total}
          pageSizeOptions={[5, 10, 15, 20]}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default HomeContent
