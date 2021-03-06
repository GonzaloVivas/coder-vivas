import { useContext, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { CartContext } from "../../context/cart/CartContext";
import ItemCount from "./ItemCount";
import ItemInCartAlert from "./ItemInCartAlert";

export default function ItemDetail({ item }) {

  const { id, title, description, pictureUrl, price, stock } = item;
  
  const { addItem, quantityInCart, removeItem } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (count) => {
    if (count > 0) {
      addItem({ ...item, quantity: count });
      setAddedToCart(true);
    } else {
      alert('Error al agregar al carrito: la cantidad no puede ser 0')
    }
  }

  const removeFromCart = () => {
    removeItem(id);
    setAddedToCart(false);
  }

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '600px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {xs: '100%', md:'50%'},
          height: {xs: '280px', sm: '420px', md: 'auto'},
          overflow: 'hidden',
          borderRadius: '20px' 
        }}
      >
        <img src={pictureUrl} alt={title} sx={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: {xs: '100%', md: '50%'},
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: {xs: 'auto', md: '400px'},
          margin: 'auto'
        }}
      >

        <Typography variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ description }</Typography>
        <Typography variant='h4'>$ { price }</Typography>

        {
          !addedToCart && (
            <ItemCount
              stock={ quantityInCart(id) ? stock - quantityInCart(id) : stock }
              initial={ quantityInCart(id) === stock ? 0 : 1 }
              onAdd={onAdd}
            />
          )
        }

        {
          Boolean(quantityInCart(id)) && (
            <ItemInCartAlert
              quantity={ quantityInCart(id) }
              removeFromCart={ removeFromCart }
            />
          )
        }

      </Box>
    </Card>
  )
}
