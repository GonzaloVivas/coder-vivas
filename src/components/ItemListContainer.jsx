import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import mockItems from '../mocks/itemMock'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const onAdd = (count) => {
    if (count > 0) {
      console.log('Agregado al carrito!');
      alert('Agregado al carrito!');
    } else {
      console.log('Error al agregar al carrito: la cantidad no puede ser 0')
      alert('Error al agregar al carrito: la cantidad no puede ser 0')
    }
  }

  const fetchItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockItems)
    }, 2000);
  });

  useEffect(() => {
    fetchItems
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {
        isLoading ? 
        (
          <Box
            sx={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress
              variant="indeterminate"
              size={40}
              thickness={4}
              value={100}
            />
          </Box>
        )
        : (
            <ItemList items={items} />
        )
      }

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
    </>
  )
}
