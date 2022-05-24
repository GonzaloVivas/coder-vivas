import { useContext } from "react";
import { Box } from "@mui/material";
import { CartContext } from "../context/cart/CartContext";
import CartDetailTable from "./CartDetailTable";
import CartEmpty from "./CartEmpty";

export default function Cart() {

  const { cart, totalInCart } = useContext(CartContext);

  return (
    <Box
      container
      sx={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {
        Boolean(cart.length) ? (

          <CartDetailTable cart={cart} totalInCart={totalInCart()} />

        ) : (

          <CartEmpty />

        )
      }
    </Box>
  )
}
