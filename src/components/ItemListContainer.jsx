import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import ItemList from './ItemList';
import { getProducts } from '../firebase/api';

export default function ItemListContainer() {

  const { category } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getItems();
  }, [category])

  const getItems = async () => {
    setIsLoading(true);
    const products = await getProducts(category);
    setItems(products);
    setIsLoading(false);
  }

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
