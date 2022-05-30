import { useState } from "react";
import { Alert, Box, Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import { AccountCircle, Email, PhoneAndroid } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { serverTimestamp } from "firebase/firestore";

export default function CheckoutForm({ cart, totalAmountInCart, saveOrder, isLoading }) {

  const [formError, setFormError] = useState('');

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!buyer.name || !buyer.phone || !buyer.email) {
      setFormError('Debe completar todos los campos');
      return;
    }

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(buyer.email);
    if (!validEmail) {
      setFormError('Debe ingresar un email válido');
      return;
    }

    const order = {
      buyer,
      cart,
      totalAmountInCart,
      status: 'GENERATED',
      timestamp: serverTimestamp()
    }

    saveOrder(order);
  }

  return (
    <Box sx={{ display: 'flex', borderRadius: '20px', padding: '20px', width: '100%', backgroundColor: grey[900], flexDirection: 'column' }}>
      
      <Typography variant='h6' sx={{ marginBottom: '20px' }}>Datos Personales</Typography>

      {
        formError && (
          <Alert severity="error" sx={{ marginBottom: '20px', borderRadius: '20px' }}>
            { formError }
          </Alert>
        )
      }
      
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        onSubmit={handleSubmit}
      >

        <TextField
          name='name'
          label='Nombre'
          variant='outlined'
          sx={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />

        <TextField
          name='phone'
          label='Teléfono'
          variant='outlined'
          sx={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroid />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />

        <TextField
          name='email'
          label='Email'
          type='email'
          variant='outlined'
          sx={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />

        {
          isLoading ? (

            <CircularProgress
              variant="indeterminate"
              size={40}
              thickness={4}
              value={100}
              sx={{ margin: 'auto' }}
            />

          ) : (

            <Button type='submit' variant='primary'>Confirmar compra</Button>

          )
        }

      </form>

    </Box>
  )
}
