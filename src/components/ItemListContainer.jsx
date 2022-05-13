import React from 'react';
import { Box } from '@mui/material';
import ItemCount from './ItemCount';

export default function ItemListContainer() {

  const onAdd = (count) => {
    if (count > 0) {
      console.log('Agregado al carrito!');
      alert('Agregado al carrito!');
    } else {
      console.log('Error al agregar al carrito: la cantidad no puede ser 0')
      alert('Error al agregar al carrito: la cantidad no puede ser 0')
    }
  }

  return (
    <Box
      sx={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </Box>
  )
}
