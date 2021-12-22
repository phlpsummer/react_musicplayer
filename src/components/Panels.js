import { useState } from "react";

const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

function Panels(){
  let [names, setNames] = useState(arr);

  const changeState = ()=>{
    //기존의 전개 연산자를 이용해서 새로운 배열로 복사
    let newArr = [...arr];
    //복사된 새로운 배열의 첫번째 값을 변경
    newArr[0] = 'Escape';
    //setNames라는 state변경 전용함수로, 위에서 복사-변경한 배열값으로 기존 state값을 바꿔치기
    setNames(newArr);
  }

  return (    
    <>
      <button onClick={changeState}>button</button>
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