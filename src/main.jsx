import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from './route/index.jsx'
import Cookies from 'js-cookie'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import '@/common/styles/reset.css'
import '@/common/styles/global.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={globalRouters} />
  </ConfigProvider>
)
