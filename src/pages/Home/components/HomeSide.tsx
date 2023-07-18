import { Space, Image, Button, Divider, Typography } from 'antd'
import React, { FC } from 'react'
import styles from './HomeSide.module.scss'
import { SERVER_URL } from '../../../constant/index'

const { Title } = Typography

const HomeSide: FC = () => {
  const imgUrl = `${SERVER_URL}Logo/Logo.jpg`
  const classifyData = [
    {
      name: 'JAVA',
      length: 20,
    },
    {
      name: 'JS',
      length: 10,
    },
    {
      name: 'NodeJS',
      length: 5,
    },
    {
      name: 'CSS',
      length: 100,
    },
    {
      name: 'JAVA',
      length: 20,
    },
    {
      name: 'JS',
      length: 10,
    },
    {
      name: 'NodeJS',
      length: 5,
    },
    {
      name: 'CSS',
      length: 100,
    },
    {
      name: 'JAVA',
      length: 20,
    },
    {
      name: 'JS',
      length: 10,
    },
    {
      name: 'NodeJS',
      length: 5,
    },
    {
      name: 'CSS',
      length: 100,
    },
    {
      name: 'JAVA',
      length: 20,
    },
    {
      name: 'JS',
      length: 10,
    },
    {
      name: 'NodeJS',
      length: 5,
    },
    {
      name: 'CSS',
      length: 100,
    },
  ]

  function handlerClick(data: any) {
    console.log(data)
  }

  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.imageStyle}
          height={150}
          width={150}
          src={imgUrl}
          preview={false}
        />
      </div>
      <Divider className={styles.divider}>Timing_cross</Divider>
      <div className={styles.noteSortWrapper}>
        <Title className={styles.title} level={4}>
          <span>笔记分类</span>
        </Title>
        <Space.Compact
          className={styles.classifyList}
          direction="vertical"
          style={{ display: 'flex' }}
        >
          {classifyData.map((data, index) => {
            return (
              <div
                onClick={() => {
                  handlerClick(data)
                }}
                className={styles.classify}
                key={index}
              >
                <span className={styles.classifyName}>{data.name}</span>
                <span className={styles.classifyCount}>({data.length})</span>
              </div>
            )
          })}
        </Space.Compact>
      </div>
    </>
  )
}

export default HomeSide
