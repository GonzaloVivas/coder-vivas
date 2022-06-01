import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ItemList from './ItemList';
import { getProducts } from '../firebase/api';
import ItemSkeleton from './ItemSkeleton';

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
          <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
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
