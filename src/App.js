
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Header from './components/Header'
// import Customers from './components/Customers';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';


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

        <Route path="/product">
          <ProductPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
