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
        </div>
    )
}
