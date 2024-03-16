import { useNavigate } from 'react-router-dom'
import { Button } from "antd"
import { goto } from "@/api"
import './home.scss'

export default function idnex() {

    const navigate = useNavigate();
    const getList = ()=>{

    }

    return (
        <div className='P-home'>
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button type="primary" onClick={() => goto('/login')}>返回登陆</Button>
            </div>
            <div className="get_btn">
                <Button onClick={getList} type='primary'>点击发送请求</Button>
            </div>
            <ul>
                {
                    
                }
            </ul>

            <div className="trans">
                <div className="left"></div>
                <div className="right">transform</div>
            </div>
      
        </div>
    )
}
