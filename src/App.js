import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    <ItemCount stock="5" initial="0"/>
    </>
  )
}

export default App;
