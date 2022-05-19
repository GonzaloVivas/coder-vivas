import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      marginTop: 10,
      gap: 5
    }}>
      <Typography variant='h1' color='primary' sx={{ fontWeight: 'bold' }}>404 :(</Typography>
      <Typography variant='h4'>Parece que la página que buscas no existe</Typography>
      <Link className='button-link' to='/' style={{ alignSelf: 'flex-start', margin: 'auto' }}>Volver al inicio</Link>
    </Box>
  )
}
