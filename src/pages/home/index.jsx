import { useNavigate } from 'react-router-dom'
import { Button } from "antd"
import { goto } from "@/api"
import './home.scss'

export default function idnex() {

    const navigate = useNavigate();

    return (
        <div className='P-home'>
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button type="primary" onClick={() => goto('/login')}>返回登陆</Button>
                <br />
                <br />
                <Button type="primary" onClick={() => navigate('/login')}>返回登陆</Button>
            </div>
            <h2>刚看完css动画，感觉自己强的可怕</h2>
            <div className="trans">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <p>向右边的动画添加过渡效果</p>
        </div>
    )
}
