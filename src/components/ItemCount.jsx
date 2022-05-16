import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';
import image from '../images/react-galaxy.png';

export default function ItemCount({ stock, initial, onAdd }) {

  const [itemCount, setItemCount] = useState(initial)

  const addItem = () => {
    if (itemCount < stock) {
      setItemCount( Number(itemCount) + 1 );
    }
  }

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount( Number(itemCount) - 1 );
    }
  }

  return (
    <Card elevation={0}>
      <CardMedia
        component='img'
        height='200'
        image={image}
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: '16px' }}>
          Curso de React
        </Typography>
        <Typography variant='body1'>
          Aprende frontend con los mejores profesores.
        </Typography>

        <Box width={190} sx={{ marginX: 'auto', marginTop: '20px' }}>
          <Box
            sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginY: '12px',
            }}
          >
            <Fab
              disabled={ itemCount === 0 }
              size='small'
              variant='primary'
              onClick={ removeItem }
            >
              -
            </Fab>
            <Typography variant="body1" sx={{ userSelect: 'none' }}>
              {itemCount }
            </Typography>
            <Fab
              disabled={ itemCount === stock }
              size='small'
              variant='primary'
              onClick={ addItem }
            >
              +
            </Fab>
          </Box>

          <Box>
            <Button
              disabled={ itemCount === 0 }
              variant='primary'
              size='small'
              onClick={ () => onAdd(itemCount) }
            >
              Agregar al carrito
            </Button>
          </Box>
        </Box>

      </CardContent>
    </Card>
  )
}
