import Title from 'antd/es/typography/Title'
import React, { FC, useState } from 'react'
import styles from './HomeHead.module.scss'
import { Col, ConfigProvider, Input, Popover, QRCode, Row, Space } from 'antd'
import { GithubOutlined, WechatOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { GIT_HUB_URL, WECHAT_URL } from '../../../constant'
import globalStyles from '../../../styles/styles.module.scss'

type PropsType = {
  searchParam: string
  handlerSearch: (searchParam: string) => void
}

const HomeHead: FC<PropsType> = (props: PropsType) => {
  const { handlerSearch } = props
  const theme = {
    token: {
      colorPrimary: globalStyles.headColor,
    },
  }

  function onSearch(value: string) {
    console.log(value)
    handlerSearch(value)
  }

  return (
    <Row className={styles.wrapper}>
      <Col className={styles['col_box']} span={6}>
        <Title className={styles.title}>
          <em>BLOGS</em>
        </Title>
      </Col>
      <Col className={styles['col_box']} span={12}>
        <ConfigProvider theme={theme}>
          <Input.Search
            allowClear
            size="large"
            placeholder="请输入关键字搜索"
            onSearch={onSearch}
          />
        </ConfigProvider>
      </Col>
      <Col className={styles['col_box_end']} span={6}>
        <Space size={20} className={styles.link}>
          <Link target="_blank" to={GIT_HUB_URL}>
            <GithubOutlined className={styles.icon} />
          </Link>
          <Popover overlayInnerStyle={{ padding: 0 }} content={<QRCode value={WECHAT_URL} />}>
            <WechatOutlined className={styles.icon} />
          </Popover>
        </Space>
      </Col>
    </Row>
  )
}

export default HomeHead
