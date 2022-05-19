import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ItemDetail from './ItemDetail';
import mockItems from '../mocks/itemsMock';
import { useNavigate, useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockItems.find( item => item.id === Number(id) ))
    }, 2000);
  });

  useEffect(() => {
    getItem
      .then(res => {
        if (res) {
          setItem(res);
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
