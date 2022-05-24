import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartItemCount from "./CartItemCount";

export default function CartDetailTableRow({ item }) {

  const { id, pictureUrl, title, quantity, stock, price } = item;

  const { increaseItemQuantity, decreaseItemQuantity, removeItem } = useContext(CartContext);

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell sx={{ verticalAlign: 'middle', padding: 1 }}>
        <img height={70} width={70} src={pictureUrl} alt={title} style={{ objectFit: 'cover', borderRadius: '10px' }} />
      </TableCell>
      <TableCell>
        {quantity} x {title}
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>${price * quantity}</TableCell>
      <TableCell>

        <CartItemCount
          quantity={quantity}
          stock={stock}
          onIncrease={() => increaseItemQuantity(item)}
          onDecrease={() => decreaseItemQuantity(item)}
          onRemove={() => removeItem(id)}
        />

      </TableCell>
    </TableRow>
  )
}
