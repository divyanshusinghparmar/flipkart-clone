import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
