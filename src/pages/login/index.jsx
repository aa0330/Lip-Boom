/* 
    react-router-dom v6

    useNavigaet 用于编程式导航

*/

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Input, Alert, Space } from 'antd'
import { UserOutlined, NumberOutlined } from '@ant-design/icons'; <q></q>
import imgLogo from './logo.png'
import './login.scss'
import Cookies from 'js-cookie';

export default function Login() {
    const [visible, setVisible] = useState(false);


    const navigate = useNavigate();
    const refUserName = useRef(null);
    const refPassWord = useRef(null);
    const getLogin = () => {
        const userName = refUserName.current.input.value.trim();
        const password = refPassWord.current.input.value.trim();
        if (userName == '' | password == '') {
            console.log('asa');
            setVisible(() => true)
            var timer = setInterval(() => {
                setVisible(() => false)
                clearInterval(timer);
            }, 2000)
            return;
        }
        Cookies.set('userName', userName, { expires: 7 })
        Cookies.set('password', password, { expires: 7 })
        navigate('/home')
    }

    const getInfo = () => {
        
    }

    return (
        <div className='P-login'>
            {visible && (<Alert message="Error" description="数据不能为空!" type="error" showIcon closable />)}

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
