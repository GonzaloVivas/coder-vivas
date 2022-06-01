import { useContext } from "react";
import { Box } from "@mui/material";
import { CartContext } from "../context/cart/CartContext";
import CartDetailTable from "./CartDetailTable";
import CartEmpty from "./CartEmpty";

export default function Cart() {

  const { cart, totalInCart, totalAmountInCart, cartClear } = useContext(CartContext);
  
  return (
    <Box
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        maxWidth: '950px',
        margin: 'auto',
        marginTop: '40px',
      }}
    >
      {
        Boolean(cart.length) ? (

          <CartDetailTable cart={cart} totalInCart={totalInCart()} totalAmountInCart={totalAmountInCart()} cartClear={cartClear} />

        ) : (

          <CartEmpty />

        )
      }
    </Box>
  )
}
