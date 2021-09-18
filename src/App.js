import { NavBar } from "./Components/Narbar/Narbar";
import { ItemListContainer } from "./Components/itemList/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartScreem } from "./Components/CartScreem/CartScreem";
import { ItemDetailContainer } from "../src/Components/itemDetailContainer/ItemDetailContainer";
import { CartProvaider, } from "./Context/CartContext";
import { Checkout } from "./Components/Checkout/Checkout";

function App() {


  return (
    <>
    
      <CartProvaider>
        <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:catId">
          <ItemListContainer />
        </Route>
        <Route exact path="/detail/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <CartScreem/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
      </Switch>
    </BrowserRouter>
      </CartProvaider>
   
    </>
);
}

export default App;
