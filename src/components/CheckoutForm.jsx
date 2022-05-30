import { useState } from "react";
import { Box, Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import { AccountCircle, Email, PhoneAndroid } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { serverTimestamp } from "firebase/firestore";

export default function CheckoutForm({ cart, totalAmountInCart, saveOrder, isLoading }) {

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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

    if (validateForm()) {
  
      const order = {
        buyer,
        cart,
        totalAmountInCart,
        status: 'GENERATED',
        timestamp: serverTimestamp()
      }
  
      saveOrder(order);
    }

  }

  const validateForm = () => {
    
    resetFormErrors();
    let validForm = true;

    if (!buyer.name) {
      setNameError(true);
      validForm = false;
    }
    if (
      !buyer.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(buyer.phone)
    ) {
      setPhoneError(true);
      validForm = false;
    }
    if (
      !buyer.email || 
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(buyer.email)
    ) {
      setEmailError(true);
      validForm = false;
    }

    return validForm

  }

  const resetFormErrors = () => {
    setNameError(false);
    setPhoneError(false);
    setEmailError(false);
  }



  return (
    <Box sx={{ display: 'flex', borderRadius: '20px', padding: '20px', width: '100%', backgroundColor: grey[900], flexDirection: 'column' }}>
      
      <Typography variant='h6' sx={{ marginBottom: '20px' }}>Datos Personales</Typography>
      
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        onSubmit={handleSubmit}
      >

        <TextField
          name='name'
          label='Nombre y Apellido'
          variant='outlined'
          sx={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          error={ nameError }
          helperText={ nameError && 'Debe indicar su nombre y apellido'}
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
          error={phoneError}
          helperText={phoneError && 'Debe indicar un número de teléfono válido'}
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
          error={emailError}
          helperText={emailError && 'Debe indicar una dirección de email válida'}
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
