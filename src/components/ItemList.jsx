import { Box, Typography } from '@mui/material'
import Item from './Item'

const ItemList = ({ items, category }) => {
  return (
    <>
      {
        category && 
        <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 10 }}>
          <Typography variant='h4' component='h1'>Artículos filtrados por categoría: { category }</Typography>
        </Box>
      }
      
      <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
        {
          items.map( item => (
            <Item key={ item.id } item={ item } />
          ))
        }
      </Box>
    </>
  )
}

export default ItemList