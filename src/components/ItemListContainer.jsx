import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import ItemList from './ItemList';
import mockItems from '../mocks/itemsMock'

export default function ItemListContainer() {

  const { category } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(() => {
        if (category) {
          return mockItems.filter( item => item.category === category );
        }
        return  mockItems;
      })
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    fetchItems
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [category])

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
        : 
        (
          items.length ?
            <ItemList items={items} category={ category } />
            :
            <Navigate to='/404' />
        )
      }
    </>
  )
}
