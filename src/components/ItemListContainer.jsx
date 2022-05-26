import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';

export default function ItemListContainer() {

  const { category } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true);
    const db = getFirestore();
    let productsCollection;

    if (category) {
      productsCollection = query(
        collection(db, 'products'),
        where('category', '==', category)
      );
    } else {
      productsCollection = collection(db, 'products');
    }

    getDocs(productsCollection)
      .then( products => {
        setItems(products.docs.map( p => ({ id: p.id, ...p.data() }) ));
      })
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
