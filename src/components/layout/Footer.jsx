import { GitHub } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import logo from '../../logo.svg';

export default function Footer() {


  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#121212',
        marginTop: '40px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff'
      }}
    >
      <img width={60} height={60} src={logo} alt="MorfiStore" />
      <Typography variant='h4' as='p'>MorfiStore</Typography>
      <Typography variant='body1'>Todo lo necesario para tus comidas en un solo lugar</Typography>
      
      <Divider style={{ width: '50%', margin: '20px auto', borderColor: grey[800] }} />

      <Typography variant='body1' sx={{ marginBottom: '10px' }}>Ecommerce desarrollado por Gonzalo Vivas para el curso de React JS de Coderhouse</Typography>
      <a href='https://github.com/GonzaloVivas' target='_blank' rel='noreferrer'>
        <GitHub fontSize='large' sx={{ color: '#ffffff' }} />
      </a>
    </Box>
  )
}
