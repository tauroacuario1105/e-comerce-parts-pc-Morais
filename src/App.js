import { NavBar } from "./Components/Narbar/Narbar";
import { ItemListContainer } from "./Components/itemList/ItemListContainer";
import { Clock } from "./Components/clock/clock";
import { Inicio } from "./Components/itemList/Inicio";
import "../src/index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MiCarrito } from "./Components/itemList/MiCarrito";
import { ItemDetailContainer } from "../src/Components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
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
        <Route exact path="/mi-carrito">
          <MiCarrito />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
