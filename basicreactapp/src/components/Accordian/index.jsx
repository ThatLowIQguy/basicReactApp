/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";

function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiple, setenableMultipleSelection] = useState(false);
    console.log(enableMultiple);
    const [multiSelected, setMultiSelected] = useState([]);
    
    function handleSingleSelection(getId){
        setSelected(getId === selected ? null : getId);
    }


    function enableMultipleSelection(){
        setenableMultipleSelection(enableMultiple === false ? true : false);
    }

    return(
        <div className="superSet">
            <button onClick={enableMultipleSelection}>multi selection</button>
            <div className="accordian">
                {
                     data && data.length > 0 ? 
                     data.map(dataItem => <div className="item">
                        <div> {
                            
                            }
                            <div onClick={()=> handleSingleSelection(dataItem.id)} className="title">
                                <h2>{dataItem.question}</h2>
                                <span>+</span>
                                <div>
                                {
                                    selected === dataItem.id ? 
                                    <div className="answer">
                                        {dataItem.answer}
                                    </div>
                                    : null
                                }
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                    : <div className="errorData">
                        <h2> No data found! </h2>
                      </div> 
                }
            </div> 
        </div>
        )
}

export default Accordian;