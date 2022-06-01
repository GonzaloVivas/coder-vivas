import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Card, Typography } from "@mui/material";
import { CartContext } from "../context/cart/CartContext";
import CheckoutDetail from "./CheckoutDetail";
import CheckoutForm from "./CheckoutForm";
import { getProduct, setOrder, updateProductStock } from '../firebase/api';

export default function Checkout() {

  const navigate = useNavigate();

  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { cart, totalAmountInCart, cartClear } = useContext(CartContext);

  useEffect(() => {
    if (!cart.length) {
      navigate('/');
    }
  }, []);  

  const saveOrder = (order) => {

    setError('')
    setIsLoading(true);
    
    checkStock(order.cart).then( async stockResponse => {

      if (stockResponse.some( resp => resp === false)) {

        setError('No tenemos stock suficiente para procesar tu orden.');
        setIsLoading(false);

      } else {
        const orderId = await setOrder(order);
        updateStock(order.cart);
        setOrderId(orderId);
        cartClear();
      }
    })

  }

  const updateStock = (cart) => {
    cart.forEach( async orderProduct => {
      await updateProductStock(orderProduct.id, orderProduct.quantity);
    })
  }

  const checkStock = async (cart) => {

    const promises = cart.map( async orderProduct => {

      const product = await getProduct(orderProduct.id);
      if (product.stock < orderProduct.quantity) {
        return false;
      } else {
        return true;
      }

    })

    return Promise.all(promises);

  }

  
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
      <Card
        sx={{
          width: '100%',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant='h5' component='h2' sx={{ marginBottom: '10px' }}>Resumen de la compra</Typography>

        {
          error && (
            <Alert severity="error" sx={{ marginBottom: '20px', borderRadius: '20px' }}>
              {error}
            </Alert>
          )
        }

        {
          orderId ? (
            
            <Alert severity="success" sx={{ marginBottom: '20px', borderRadius: '20px' }}>
              Su orden fue generada correctamente bajo el código
              <Typography variant='h5' component='p' sx={{ fontWeight: 'bold', margin: '20px auto' }}>{orderId}</Typography>
              En los próximos días nos pondremos en contacto.
            </Alert>

          ) : (

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, width: '100%' }}>

            <CheckoutDetail cart={cart} totalAmountInCart={totalAmountInCart()} />

            <CheckoutForm cart={cart} totalAmountInCart={totalAmountInCart()} saveOrder={saveOrder} isLoading={isLoading} />

          </Box>

          )
        }

      </Card>
    </Box>
  )
}
