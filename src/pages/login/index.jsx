/* 
    react-router-dom v6

*/

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import { UserOutlined, NumberOutlined } from '@ant-design/icons'; <q></q>
import imgLogo from './logo.png'
import './login.scss'
import Cookies from 'js-cookie';


export default function index() {
    const refUserName = useRef(null);
    const refPassWord = useRef(null);

    const navigate = useNavigate()

    const getLogin = () => {
        const userName = refUserName.current.input.value.trim();
        const password = refPassWord.current.input.value.trim();
        Cookies.set('userName', userName, { expires: 7 })
        Cookies.set('password', password, { expires: 7 })

    }

    const getInfo = () => {
        
    }


    return (
        <div className='P-login'>
            <img src={imgLogo} alt="logo" className="logo" />
            <div className="ipt-con">
                <Input ref={refUserName} placeholder='账号' prefix={<UserOutlined />} />
            </div>
            <div className="ipt-con">
                <Input.Password ref={refPassWord} placeholder='密码' prefix={<NumberOutlined />} />
            </div>
            <div className="ipt-btn">
                <Button type="primary" onClick={getLogin} >登录</Button>
                <Button type="primary" onClick={getInfo} >注册</Button>

            </div>
        </div>
    )
}
