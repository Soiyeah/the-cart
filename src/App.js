
import Header from './components/Header'
import Customers from './components/Customers';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
