import { Button } from "antd"
import './home.scss'

export default function idnex() {
    return (
        <div className='P-home'>
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button type="primary">返回登陆</Button>
            </div>
        </div>
    )
}
