import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCartFromLocalStorage(); 
  }, []);  

  const addItem = ( item ) => {

    let newCart = [];

    if ( isInCart(item.id) ) {
      
      newCart = cart.reduce((acc, _item) => {
        if(item.id !== _item.id) {
          return acc.concat(_item);
        } else {
          return acc.concat({ ..._item, quantity: _item.quantity + item.quantity });
        }
      }, []);

    } else {

      newCart = cart.concat(item);

    }

    setCart(newCart);
    setCartInLocalStorage(newCart);
  }

  const increaseItemQuantity = ({ id }) => {
    let newCart = [];
    newCart = cart.reduce((acc, _item) => {
      if(id !== _item.id) {
        return acc.concat(_item);
      } else {
        return acc.concat({ ..._item, quantity: _item.quantity + 1});
      }
    }, []);
    setCart(newCart);
    setCartInLocalStorage(newCart);
  }

  const removeItem = ( id ) => {
    const newCart = cart.filter( _item => _item.id !== id );
    setCart(newCart);
    setCartInLocalStorage(newCart);
  }

  const decreaseItemQuantity = ({ id, quantity }) => {

    if (quantity === 1) {
      removeItem(id);
      return;
    }

    let newCart = [];
    newCart = cart.reduce((acc, _item) => {
      if (id !== _item.id) {
        return acc.concat(_item);
      } else {
        return acc.concat({ ..._item, quantity: _item.quantity - 1 });
      }
    }, []);
    setCart(newCart);
    setCartInLocalStorage(newCart);

  }

  const cartClear = () => {
    setCart([])
    setCartInLocalStorage([]);
  };

  const isInCart = ( id ) => {
    return cart.some( _item => _item.id === id);
  }

  const quantityInCart = ( id ) => {
    const item = cart.find(_item => _item.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  }

  const totalInCart = () => {
    return cart.reduce( (acc, item) => {
      return acc = acc + item.quantity
    }, 0)
  }

  const totalAmountInCart = () => {
    return cart.reduce((acc, _item) => {
      return acc + (_item.quantity * _item.price)
    }, 0);
  }

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }

  const setCartInLocalStorage = ( cart ) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      cartClear,
      quantityInCart,
      totalInCart,
      totalAmountInCart,
      increaseItemQuantity,
      decreaseItemQuantity
    }}>
      { children }
    </CartContext.Provider>
  )

}