import React, { FC } from 'react'
import styles from './HomeContent.module.scss'
import { Breadcrumb, Divider, Pagination, Space, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import { useNavigate } from 'react-router-dom'
import { FILE_PAGE_PATH } from '../../../router'
import { CLIENT_URL } from '../../../constant'

const HomeContent: FC = () => {
  const nav = useNavigate()
  const tagList = [
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc',
      length: 20,
    },
    {
      name: 'ertasdasd',
      length: 5,
    },
    {
      name: 'asc',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascsdf',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc',
      length: 20,
    },
    {
      name: 'ertasd',
      length: 5,
    },
    {
      name: 'ascsdf',
      length: 20,
    },
    {
      name: 'ertqwe',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'asc13123',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
    {
      name: 'ascasdasd',
      length: 20,
    },
    {
      name: 'ert',
      length: 5,
    },
  ]

  const pageList = [
    {
      path: 'interview',
      title: 'interview',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
    {
      title: 'asdasd',
      desc: '收到浮华不实的愤怒悲伤的那么腹背受敌减肥还是独家开发不是对方明尼苏达发生那么多分是电风扇等你们分手都买奶粉苏丹诺夫四大美女风水宝地父母苏丹诺夫什么地方',
    },
  ]

  const breadItems = [
    {
      title: 'Home',
    },
    {
      title: '...',
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: 'An Application',
    },
  ]

  function PageTitleHandlerClick(page: any) {
    console.log(page)
    const w = window.open('about:blank')
    if (w) w.location.href = `${CLIENT_URL}${FILE_PAGE_PATH}${page.path}`
    // nav(`${FILE_PAGE_PATH}${page.path}`)
  }

  return (
    <>
      <Space align="center" className={styles.tagWrapper} size={[0, 'small']} wrap>
        {tagList.map((tag, index) => {
          return (
            <Tag className={styles.tag} key={index} bordered={false}>
              {tag.name}
            </Tag>
          )
        })}
      </Space>
      <Divider style={{ margin: '0' }} dashed />
      <Breadcrumb className={styles.Breadcrumb} items={breadItems} />
      <div className={styles.listWrapper}>
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
                {page.title}
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
          size="small"
          defaultCurrent={1}
          total={50}
          showSizeChanger
        />
      </div>
    </>
  )
}

export default HomeContent
