import React, {useState} from 'react';
import "../Navbar.css";

const Home = () => {

    const [counter, setCouter] = useState(0)

    const onClickHandler = (change) => {
        console.log("Inside onClick")
        if(change === "decrease")
        setCouter(counter - 1);
        if(change === "increase")
        setCouter(counter + 1);
    }
    return (
        <>
            <div>
               This is home.
            </div>
            <div>
                <button className="pd-20" onClick = {() => onClickHandler("decrease")}>-</button>
                <span className="pd-20">{counter}</span>
                <button  className="pd-20" onClick = {() => onClickHandler("increase")}>+</button>
            </div>  
        </>
    )
}

export default Home;