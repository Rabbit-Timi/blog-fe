import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { FC } from 'react'
import styles from './HomeLayout.module.scss'
import HomeSide from '../components/HomeSide'
import HomeHead from '../components/HomeHead'
import HomeContent from '../components/HomeContent'

const HomeLayout: FC = () => {
  return (
    <Layout className={styles.wrapper}>
      <Header className={styles.headerStyle}>
        <HomeHead />
      </Header>
      <Layout hasSider className={styles.mainStyle}>
        <Sider className={styles.siderStyle}>
          <HomeSide />
        </Sider>
        <Content className={styles.contentStyle}>
          <HomeContent />
        </Content>
      </Layout>
      <Footer className={styles.footerStyle}>Copyright © 2023</Footer>
    </Layout>
  )
}

export default HomeLayout
