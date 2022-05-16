import { Box } from '@mui/material'
import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>      
      {
        items.map( item => (
          <Item key={ item.id } item={ item } />
        ))
      }
    </Box>
  )
}

export default ItemList