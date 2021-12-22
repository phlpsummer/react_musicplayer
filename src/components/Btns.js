import { useState } from "react";

function Btns(props){
    let [num,setNum] = useState(0);

    function plus(){
        setNum(++num);
    //   const frame = e.currentTarget.closest("figure").querySelector("section");
        props.frame.current.style.transform = `rotate(${45*num}deg)`;
    }
  
    function minus(){
        setNum(--num);
    //   const frame = e.currentTarget.closest("figure").querySelector("section");
        props.frame.current.style.transform = `rotate(${45*num}deg)`;
    }

    return(
        <>
            <div className="btnPrev" onClick={()=>plus()}>Prev</div>
            <div className="btnNext" onClick={()=>minus()}>Next</div>
        </>
    )
}

export default Btns;