import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/api';
import ItemDetailSkeleton from './ItemDetailSkeleton';

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
          <ItemDetailSkeleton />
        )
        : (
          <ItemDetail item={ item } />
        )
      }
    </Box>
  )
}
