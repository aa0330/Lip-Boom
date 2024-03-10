/* 
    Outlet 指定路由组件呈现的位置
    
*/
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import Header from '@/components/header'
import './entry.scss'

const { darkAlgorithm, defaultAlgorithm } = theme

export default function Entry() {
    const globalTheme = useSelector((state) => state.theme)

    let antdTheme = {
        // 亮色/暗色配置
        algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
    }

    return (
        <ConfigProvider theme={antdTheme}>
            <div className="M-entry">
                <Header />
                <div className="main-container">
                    <Outlet />
                </div>
            </div>
        </ConfigProvider>
    )
}


