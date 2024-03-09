import { Button } from 'antd'
import Header from '@/components/header'
import './account.scss'

export default function index() {
    return (
        <div className='P-account'>
            <Header />
            <h1>Account Page</h1>
            <div className="ipt-con">
                <Button type="primary">返回登录</Button>
            </div>
        </div>
    )
}
