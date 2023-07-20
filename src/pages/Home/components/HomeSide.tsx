import { Space, Image, Button, Divider, Typography } from 'antd'
import React, { FC } from 'react'
import styles from './HomeSide.module.scss'
import { SERVER_URL } from '../../../constant/index'
import { FilePageType } from '../../../utils/filePageType'

const { Title } = Typography

type PropsType = {
  sideDir: FilePageType[]
  handlerTagClick: (path: string) => void
}

const HomeSide: FC<PropsType> = (props: PropsType) => {
  const { sideDir = [], handlerTagClick } = props
  const imgUrl = `${SERVER_URL}Logo/Logo.jpg`
  const classifyData = sideDir

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
          <div
            className={styles.classify}
            onClick={() => {
              handlerTagClick('')
            }}
          >
            <span>全部</span>
          </div>
          {classifyData.map((data, index) => {
            return (
              <div
                onClick={() => {
                  handlerTagClick(data.filePath)
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
