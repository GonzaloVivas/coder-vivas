import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartDetailTable from "./CartDetailTable";
import CartEmpty from "./CartEmpty";

export default function CartDetail() {

  const { cart, totalInCart } = useContext(CartContext);

  return (
    <>
      {
        Boolean(cart.length) ? (

          <CartDetailTable cart={cart} totalInCart={totalInCart()}/>

        ) : (

          <CartEmpty />

        )
      }
    </>
  )
}
