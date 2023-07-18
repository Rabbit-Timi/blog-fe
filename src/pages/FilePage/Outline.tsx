import React, { FC } from 'react'
import styles from './Outline.module.scss'
import { Space } from 'antd'

export type TOCType = {
  level: string
  name: string
  id: string
  str: string
}[]

type PropsType = {
  toc: TOCType
}

enum TitleTighten {
  h1 = 0,
  h2 = 10,
  h3 = 20,
  h4 = 30,
  h5 = 40,
  h6 = 50,
}

const Outline: FC<PropsType> = (props: PropsType) => {
  const { toc } = props
  return (
    <Space direction="vertical" size="middle" className={styles.wrapper}>
      {toc.map((t, index) => {
        let tighten = '0'
        for (const key in TitleTighten) {
          if (t.level === key) {
            tighten = TitleTighten[key]
          }
        }
        return (
          <a
            key={index}
            href={`#${t.id}`}
            dangerouslySetInnerHTML={{ __html: t.name }}
            style={{ paddingLeft: `${tighten}px`, display: 'inline-block' }}
          ></a>
        )
      })}
    </Space>
  )
}

export default Outline
