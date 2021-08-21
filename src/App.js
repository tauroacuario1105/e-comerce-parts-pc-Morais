import { NavBar } from './Components/Narbar/Narbar';
import {ItemListContainer} from './Components/itemList/ItemListContainer'
import { Clock } from './Components/clock/clock';
import '../src/index.css'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="ARMA TU PC"/>

    </div>
  );
}


export default App;
