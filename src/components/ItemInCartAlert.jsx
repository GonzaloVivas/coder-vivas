import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

export default function ItemInCartAlert({ quantity, removeFromCart}) {
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '20px',
        flexDirection: 'column',
        padding: '10px 20px',
        borderRadius: '20px',
        flexGrow: 1,
        alignItems: 'center',
        marginBottom: '12px',
        color: '#fff',
        backgroundColor: '#9f7dc9'
      }}
    >
      <Typography variant='body1'>Tienes {quantity} unidad/es de este producto en el carrito</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px'
        }}
      >
        <Link
          to='/cart'
          className='button-link'
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '6px 16px'
          }}
        >
          Ir al carrito
        </Link>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '6px 16px',
            color: '#ffffff',
            fontSize: '0.700rem'
          }}
          onClick={removeFromCart}
        >
          Eliminar del carrito
        </Button>
      </Box>
    </Box>
  )
}
