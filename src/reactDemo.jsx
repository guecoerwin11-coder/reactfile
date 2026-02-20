import { useState } from "react";

function Demo(){
    const [count, setCount] = useState(0)

    const cnt = () => setCount(prev => prev + 1);
    return(
        <div>
            <h1>Lets Count</h1>
            <button onClick={cnt} >Count</button>
            <p>{count}</p>
        </div>
    )
}

export default Demo;
