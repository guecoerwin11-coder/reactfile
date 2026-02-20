import { useState } from "react";

function Counts(){
    const[cnt, setCount] = useState(0);

    const btnCnt = () => setCount(prev => prev + 1);
    return(
        <>
            <h2>Lets count sample demo</h2>
            <button onClick={btnCnt}>Count</button>
            <p>{cnt}</p>
        </>
    )
}

export default Counts;