import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panels from './components/Panels.js';
import { useState } from 'react';

const deg = 45;

function App() {
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
    <div className="App">
      <figure>
        <Logo />
        <Menu />

        <Panels />

        <div className="btnPrev" onClick={(e)=>plus(e)}>Prev</div>
        <div className="btnNext" onClick={(e)=>minus(e)}>Next</div>

        <Footer />
      </figure>
    </div>
  );
}

export default App;
