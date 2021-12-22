import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panels from './components/Panels.js';
import Btns from './components/Btns.js';
import { useRef } from 'react';

function App() {
  let frame = useRef(null);
  return (
    <div className="App">
      <figure>
        <Logo />
        <Menu />

        <section ref={frame}>
          <Panels />
        </section>

        <Btns frame={frame} />

        <Footer />
      </figure>
    </div>
  );
}

export default App;
