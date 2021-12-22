import { useState } from "react";

const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

function Panels(){
  let [names, setNames] = useState(arr);
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

  return (    
    <>
      <div className="btnPrev" onClick={(e)=>plus(e)}>Prev</div>
      <div className="btnNext" onClick={(e)=>minus(e)}>Next</div>

      <section>
      {
        names.map((data,index)=>{
          let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}
          let imgSrc = `${path}/img/${data}.jpg`;
      
          return (
            <article key={index} style={style}>
              <div className="inner">
                <div className="pic">
                  <img src={imgSrc}  />
                </div>
                <h2>{data}</h2>
              </div>
            </article>
          )
        })
      }
      </section>
    </>
  )
}

export default Panels;