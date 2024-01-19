import React, { useState } from "react";
import '../Cal.css'

function Cal() {
    const [num, setNum] = useState("0");
   
    const inputHandler = (e) => {
        e.preventDefault();
    const clickedValue = e.target.textContent;
    if (num === "0" && /\d/.test(clickedValue)) {
        setNum(clickedValue);
    } else {
        setNum((prevValue) => prevValue + clickedValue);
    }
        
    }
    const clearInput = () => { 
        setNum("0")
    }
    const backspace = () => { 
        setNum((prevValue) => prevValue.slice(0, -1));
    }
    const changePlusMinus = () => { 
        setNum((prevValue) => (prevValue[0] === "-" ? prevValue.slice(1) : "-" + prevValue));
    }
    const calculateAns = () => { 
        setNum(eval(num).toString());
    }
    return (
        <>
            <div className="container-fluid calPage">
                <div className="container">

                    <div className="main">
                       
                        <div className="display">
                            <input type="text" name="input" className="input" placeholder="0" maxlength="12" autocomplete="off" value={num} />
                        </div>

                        <div className="show-btn">
                            <button className="btn exp" onClick={inputHandler}>
                                ^
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                (
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                )
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                √
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                x<sup>2</sup>
                            </button>
                            <button className="btn clr" onClick={clearInput}>
                                AC
                            </button>
                            <button className="btn clr" onClick={backspace}>
                                ⌫
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                log
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                /
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                %
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                7
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                8
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                9
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                *
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                x<sup>3</sup>
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                4
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                5
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                6
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                -
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                <sup>3</sup>√
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                1
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                2
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                3
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                +
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                !
                            </button>
                            <button className="btn exp" onClick={changePlusMinus}>
                                ±
                            </button>
                            <button className="btn" onClick={inputHandler}>
                                0
                            </button>
                            <button className="btn exp" onClick={inputHandler}>
                                .
                            </button>
                            <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cal;