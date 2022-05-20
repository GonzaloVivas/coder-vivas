import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Fab, Typography } from '@mui/material';

export default function ItemCount({ stock, initial, onAdd, itemInCart }) {

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
    <Box width={190} sx={{ marginX: 'auto' }}>
      <Box>
        {
          itemInCart ? (
            <>
              <Typography variant='body2' sx={{ marginBottom: 2 }}>¡Producto agregado al carrito!</Typography>
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
            </>
          ) : (
            <>
              <Box
                sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
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
              <Button
                disabled={ itemCount === 0 }
                variant='primary'
                size='small'
                onClick={ () => onAdd(itemCount) }
              >
                Agregar al carrito
              </Button>
            </>
          )
        }
      </Box>
    </Box>
  )
}
