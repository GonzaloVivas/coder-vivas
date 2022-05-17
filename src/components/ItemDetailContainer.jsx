import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ItemDetail from './ItemDetail';
import mockItems from '../mocks/itemsMock';

export default function ItemDetailContainer() {

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockItems.find( item => item.id === 1 ))
    }, 2000);
  });

  useEffect(() => {
    getItem
      .then(res => setItem(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Box
      sx={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
          <ItemDetail item={ item } />
        )
      }
    </Box>
  )
}
