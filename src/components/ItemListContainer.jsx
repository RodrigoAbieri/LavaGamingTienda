import ItemList from "./ItemList";

function ItemListContainer({greeting}){
    return(
        <>
        <p>{greeting}</p>
        <ItemList/>
        </>
    )
}

export default ItemListContainer;