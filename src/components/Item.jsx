import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const Item = ({ item }) => {

  const { id, title, shortDescription, price, pictureUrl, stock} = item;

  return (
    <Card>
      <CardMedia
        component='img'
        height='200'
        image={ pictureUrl }
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '260px', gap: 2 }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='h6'>
            { title }
          </Typography>
          <Typography variant='body1'>
            { shortDescription }
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: 1 }}>
          <Typography variant='h5'>
            $ {price}
          </Typography>
          
          <Link
            to={`/item/${id}`}
            className='button-link'
          >
            Ver detalle del producto
          </Link>

          <Typography variant='body2'>
            Stock disponible: { stock }
          </Typography>
        </Box>

      </CardContent>
    </Card>
  )
}

export default Item