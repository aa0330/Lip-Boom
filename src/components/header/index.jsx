/* 
    Hook
        useLocation  返回一个路由对象包含当前的路由信息

        useLocation搭配  Menu导航菜单组件、Breadcrummb面包屑组件使用

        useDispatch用于写入store库，调用store里定义的方法。

        useSelector用于读取store库里的变量值。
*/

import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDark } from '@/store/slices/theme'

import './header.scss'
import useSelection from 'antd/es/table/hooks/useSelection'

export default function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const { title, info } = props
    info && info()

    // 读取store中的主题配置
    const theme = useSelector((state) => state.theme)

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


    const dispatch = useDispatch()


    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">{title}</div>
                <div className="menu-con">
                    <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
                </div>
                <div className="opt-con">

                    <Button icon={<MoonOutlined />} shape="circle"></Button>
                    {
                        theme.dark ? (

                            <Button icon={<SunOutlined />} shape="circle" onClick={() => dispatch(setDark(false))}></Button>

                        ) : (
                            <Button icon={< MoonOutlined />} shape="circle" onClick={() => { dispatch(setDark(true)) }}></Button>
                        )}
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card >
    )
}
