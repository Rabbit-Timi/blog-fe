import Title from 'antd/es/typography/Title'
import React, { FC } from 'react'
import styles from './HomeHead.module.scss'

const HomeHead: FC = () => {
  return (
    <>
      <Title className={styles.title}>
        <em>BLOGS</em>
      </Title>
    </>
  )
}

export default HomeHead
