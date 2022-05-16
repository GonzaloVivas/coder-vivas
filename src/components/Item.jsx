import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const Item = ({ item }) => {

  const { title, description, price, pictureUrl, stock} = item;

  return (
    <Card elevation={0}>
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
            { description }
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: 1 }}>
          <Typography variant='h5'>
            $ {price}
          </Typography>
          <Button
            variant='primary'
            size='small'
          >
            Ver detalle del producto
          </Button>

          <Typography variant='body2'>
            Stock disponible: { stock }
          </Typography>
        </Box>

      </CardContent>
    </Card>
  )
}

export default Item