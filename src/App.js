import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
    <div className="max-w-7xl mx-auto">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        {/* <Route exact path="/products/:id" component={Product} /> */}
      </Switch>
      </div>
    </>
  );
}

export default App;
