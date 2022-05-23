import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Fab, Typography } from '@mui/material';

export default function ItemCount({ stock, initial, onAdd, quantityInCart, removeItemFromCart }) {

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
    <>
      <Box width={190} sx={{ marginX: 'auto' }}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <Fab
              disabled={itemCount === 0}
              size='small'
              variant='primary'
              onClick={removeItem}
            >
              -
            </Fab>
            <Typography variant="body1" sx={{ userSelect: 'none' }}>
              {itemCount}
            </Typography>
            <Fab
              disabled={itemCount === stock}
              size='small'
              variant='primary'
              onClick={addItem}
            >
              +
            </Fab>
          </Box>
          <Button
            disabled={itemCount === 0}
            variant='primary'
            size='small'
            onClick={() => onAdd(itemCount)}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>

      {
        Boolean(quantityInCart) && (
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
            <Typography variant='body1'>Tienes { quantityInCart } unidad/es de este producto en el carrito</Typography>
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
                onClick={removeItemFromCart}
              >
                Eliminar del carrito
              </Button>
            </Box>
          </Box>
        )
      }

    </>
  )
}
