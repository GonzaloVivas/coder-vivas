import { useState } from "react";
import { Button, Card, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import { AccountCircle, Email, PhoneAndroid } from "@mui/icons-material";
import { serverTimestamp } from "firebase/firestore";

export default function CheckoutForm({ cart, totalAmountInCart, saveOrder, isLoading }) {

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false
  });

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {

    if (!e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: true });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false });
      setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
      });
    }

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
      setFormErrors(formErrors => ({ ...formErrors, name: true }));
      validForm = false;
    }
    if (
      !buyer.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(buyer.phone)
    ) {
      setFormErrors(formErrors => ({ ...formErrors, phone: true }));
      validForm = false;
    }
    if (
      !buyer.email || 
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(buyer.email)
    ) {
      setFormErrors(formErrors => ({ ...formErrors, email: true }));
      validForm = false;
    }

    return validForm

  }

  const resetFormErrors = () => {
    setFormErrors({ name: false, phone: false, email: false });
  }

  return (
    <Card variant='dark' sx={{ display: 'flex', borderRadius: '20px', padding: '20px', width: '100%', flexDirection: 'column', boxShadow: 'unset' }}>
      
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
          error={ formErrors.name }
          helperText={ formErrors.name && 'Debe indicar su nombre y apellido'}
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
          error={formErrors.phone}
          helperText={formErrors.phone && 'Debe indicar un número de teléfono válido'}
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
          error={formErrors.email}
          helperText={formErrors.email && 'Debe indicar una dirección de email válida'}
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

    </Card>
  )
}
