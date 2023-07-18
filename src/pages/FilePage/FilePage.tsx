import React, { FC, useEffect } from 'react'

import Clipboard from 'clipboard'

import 'highlight.js/styles/paraiso-dark.css'
import './FilePage.scss'
import '../../styles/github-markdown.css'
import { message } from 'antd'

type PropsType = {
  html: string
}

const FilePage: FC<PropsType> = (props: PropsType) => {
  const copy = new Clipboard('.copy-btn')
  const { html } = props

  useEffect(() => {
    copy.on('success', e => {
      message.success('复制成功')
    })
    copy.on('error', function (e) {
      console.error('Action:', e.action)
      console.error('Trigger:', e.trigger)
      message.error('复制失败')
    })
  }, [])

  const output = document.getElementById('output')
  if (output) output.innerHTML = html

  return <div className="markdown-body" id="output"></div>
}

export default FilePage
