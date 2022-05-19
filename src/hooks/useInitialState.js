//hook del context, boton de agregar al carrito y poderlos ver.
import {useState} from "react";

const initialState = {
    cart:[],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id 
                !== payload.id)
        });
    }
 return {
     state,
     addToCart,
     removeFromCart,
 }
}

export default useInitialState; //tiene un estado y una función