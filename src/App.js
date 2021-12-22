import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panels from './components/Panels.js';
import Btns from './components/Btns.js';

function App() {
  return (
    <div className="App">
      <figure>
        <Logo />
        <Menu />

        <Panels />

        <Btns />

        <Footer />
      </figure>
    </div>
  );
}

export default App;
