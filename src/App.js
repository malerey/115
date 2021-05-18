import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './views/Home'
import Adoptar from './views/Adoptar'
import Gatos from './views/Gatos'
import './App.css';

function App() {

  // forms en react 
  // hooks custom para formularios
  // destructuring y ES6 

  return (
    <div className="App">

      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/adoptar/" component={Adoptar} />
        <Route path="/gatos" component={Gatos} />
      </Switch>
        
        <footer>HOLA SOY EL FOOTER</footer>

      </BrowserRouter>
    </div>
  );
}

export default App;

