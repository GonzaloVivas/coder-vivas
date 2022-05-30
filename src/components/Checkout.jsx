import { useNavigate } from 'react-router-dom';
import { Alert, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart/CartContext";
import CheckoutDetail from "./CheckoutDetail";
import CheckoutForm from "./CheckoutForm";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

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

  const saveOrder = async (order) => {

    setError('')
    setIsLoading(true);
    
    checkStock(order).then( stockResponse => {

      if (stockResponse.some( resp => resp === false)) {
        
        setError('No tenemos stock suficiente para procesar tu orden.');
        setIsLoading(false);

      } else {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
          .then(({ id }) => {
            updateStock(order);
            setOrderId(id);
            cartClear();
          })
          .catch(e => setError('Ocurrió un error al generar la orden. Por favor intente nuevamente en unos minutos.'))
          .finally(() => setIsLoading(false))

      }
    })

  }


  const updateStock = (order) => {
    const db = getFirestore();
    order.cart.forEach( orderProduct => {
      const productDoc = doc(db, 'products', orderProduct.id);
      getDoc(productDoc)
        .then(dbProduct => {
          const newStock = dbProduct.data().stock - orderProduct.quantity;
          updateDoc(productDoc, { stock: newStock })
        })
      
    })
  }

  const checkStock = (order) => {

    const promises = [];
    const db = getFirestore();

    order.cart.forEach( orderProduct => {
      const productRef = doc(db, 'products', orderProduct.id);
      const promise = getDoc(productRef)
        .then(dbProduct => {
          if (dbProduct.exists()) {
            if (dbProduct.data().stock < orderProduct.stock) {
              return false;
            } else {
              return true;
            }
          }
        })
        .catch(err => console.log(err))
      
      promises.push(promise)
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
      <Box
        sx={{
          width: '100%',
          backgroundColor: grey[800],
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

          <Box sx={{ display: 'flex', gap: 5, width: '100%' }}>

            <CheckoutDetail cart={cart} totalAmountInCart={totalAmountInCart()} />

            <CheckoutForm cart={cart} totalAmountInCart={totalAmountInCart()} saveOrder={saveOrder} isLoading={isLoading} />

          </Box>

          )
        }

      </Box>
    </Box>
  )
}
