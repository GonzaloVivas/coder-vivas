import { Avatar, ListItem, ListItemAvatar, ListItemText, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import CartItemCount from "./CartItemCount";

export default function CartDetailTableRow({ item, largeScreen }) {

  const { id, pictureUrl, title, quantity, stock, price } = item;

  const { increaseItemQuantity, decreaseItemQuantity, removeItem } = useContext(CartContext);
  
  if (largeScreen) {
    
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

  } else {

    return (
      <>
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell sx={{ verticalAlign: 'middle', padding: 1, borderBottom: 0 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={title} src={pictureUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={quantity + ' x ' + title}
              secondary={quantity + ' x $' + price + ' - $' + price * quantity}
            />
          </ListItem>
          </TableCell>
        </TableRow>

        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell sx={{ paddingTop: 0 }}>

            <CartItemCount
              quantity={quantity}
              stock={stock}
              onIncrease={() => increaseItemQuantity(item)}
              onDecrease={() => decreaseItemQuantity(item)}
              onRemove={() => removeItem(id)}
            />

          </TableCell>
        </TableRow>
      </>
    )

  }
}
