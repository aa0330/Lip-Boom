import { useState } from "react"

export default function index() {
    const { count, setCount } = useState(0);



    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}
