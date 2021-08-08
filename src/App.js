import logo from './logo.svg';
import './App.scss';

//import modules

import Hero from './components/hero';
import Header from './components/header';
import FiftyFifty from './components/fiftyfifty';

function App() {
  return (
    <div>
      <Header />
      <Hero title="Loucks Engineering INC" />

    </div>
  );
}

export default App;
