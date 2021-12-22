import { useState } from "react";

function Btns(){
    let [num,setNum] = useState(0);

    function plus(e){
      setNum(++num);
      const frame = e.currentTarget.closest("figure").querySelector("section");
      frame.style.transform = `rotate(${45*num}deg)`;
    }
  
    function minus(e){
      setNum(--num);
      const frame = e.currentTarget.closest("figure").querySelector("section");
      frame.style.transform = `rotate(${45*num}deg)`;
    }

    return(
        <>
            <div className="btnPrev" onClick={(e)=>plus(e)}>Prev</div>
            <div className="btnNext" onClick={(e)=>minus(e)}>Next</div>
        </>
    )
}

export default Btns;