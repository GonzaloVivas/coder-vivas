import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true);
    const db = getFirestore();
    const productRef = doc(db, 'products', id);

    getDoc(productRef)
      .then( product => {
        if (product.exists()) {
          setItem({ id: product.id, ...product.data() });
        } else {
          navigate('/404');
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))

  }, [id])

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
