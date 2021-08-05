import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Catalogo"/>
    <ItemCount stock="5" initial="0"/>
    </>
  )
}

export default App;
