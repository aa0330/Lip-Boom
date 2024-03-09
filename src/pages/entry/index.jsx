/* 
    Outlet 指定路由组件呈现的位置
    
*/
import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import './entry.scss'

export default function Entry() {
    return (
        <div className="M-entry">
            <Header />
            <div className="main-container">
                <Outlet />
            </div>
        </div>
    )
}


