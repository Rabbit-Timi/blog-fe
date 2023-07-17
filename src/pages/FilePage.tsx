/* eslint-disable react/no-unescaped-entities */
import { useRequest } from 'ahooks'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFileService } from '../service/file'

import Clipboard from 'clipboard'

import 'highlight.js/styles/paraiso-dark.css'
import './FilePage.scss'
import './github-markdown.css'
import { message } from 'antd'

const FilePage: FC = () => {
  const { name = 'interview' } = useParams()
  const [fileHtml, setFileHtml] = useState('')

  const copy = new Clipboard('.copy-btn')

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

  const { loading } = useRequest(async () => await getFileService(name), {
    onSuccess(res) {
      const { html } = res
      setFileHtml(html)
      const output = document.getElementById('output')
      if (output) output.innerHTML = html
      console.log(html)
    },
  })

  return <div className="markdown-body" id="output"></div>
}

export default FilePage
