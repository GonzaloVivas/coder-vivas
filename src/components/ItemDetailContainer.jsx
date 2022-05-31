import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/api';

export default function ItemDetailContainer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getItem();
  }, [id])

  const getItem = async () => {
    setIsLoading(true);
    const product = await getProduct(id);
    if (!product) {
      navigate('/404');
    } else {
      setItem(product);
      setIsLoading(false);
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
