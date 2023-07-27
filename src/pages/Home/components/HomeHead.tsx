import Title from 'antd/es/typography/Title'
import React, { FC } from 'react'
import styles from './HomeHead.module.scss'
import { Button, Popover, QRCode, Space } from 'antd'
import { GithubOutlined, WechatOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { GIT_HUB_URL, WECHAT_URL } from '../../../constant'

const HomeHead: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>
        <em>BLOGS</em>
      </Title>
      <Space size={20} className={styles.link}>
        <Link target="_blank" to={GIT_HUB_URL}>
          <GithubOutlined className={styles.icon} />
        </Link>
        <Popover overlayInnerStyle={{ padding: 0 }} content={<QRCode value={WECHAT_URL} />}>
          <WechatOutlined className={styles.icon} />
        </Popover>
      </Space>
    </div>
  )
}

export default HomeHead
