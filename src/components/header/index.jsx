/* 
    Hook
        useLocation  返回一个路由对象包含当前的路由信息

        useLocation搭配  Menu导航菜单组件、Breadcrummb面包屑组件使用

        
*/

import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './header.scss'

export default function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const { title, info } = props
    info && info()

    const menuItems = [
        {
            label: 'Home',
            key: '/home',
            icon: <HomeOutlined />,
            onClick: () => {
                navigate('/home')
            }
        },
        {
            label: 'Acccount',
            key: '/account',
            icon: <UserOutlined />,
            onClick: () => {
                navigate('/account')
            }
        },
    ]



    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">{title}</div>
                <div className="menu-con">
                    <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
                </div>
                <div className="opt-con">
                    <Button icon={<MoonOutlined />} shape="circle"></Button>
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}
