import { BrowserRouter,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
