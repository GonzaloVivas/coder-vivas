import React, { useState } from 'react';
import { Box, Button, Fab, Typography } from '@mui/material';

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
    <Box width={190} sx={{ marginX: 'auto' }}>
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
  )
}
