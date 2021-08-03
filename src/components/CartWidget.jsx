import { Component } from "react";
import shoppingCart from "./img/shoppingCart.png";
import "./css/cart.css";

export default class CartWidget extends Component {
    render(){
        return (
            <img src={shoppingCart} alt="" 
            style={{
                paddingTop: '7px',
                height: '40px'
            }}
            />
        )
    }
}