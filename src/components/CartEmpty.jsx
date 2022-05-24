import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function CartEmpty() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      marginTop: 10,
      gap: 3,
    }}>

      <ShoppingCart
        color='primary'
        sx={{ fontSize: '100px', margin: 'auto' }}
      />

      <Typography variant='h4'>Todavía no agregaste ningún producto al carrito</Typography>

      <Link
        className='button-link'
        to='/'
        style={{ alignSelf: 'flex-start', margin: 'auto' }}
      >
        Empezar a comprar
      </Link>

    </Box>
  )
}
