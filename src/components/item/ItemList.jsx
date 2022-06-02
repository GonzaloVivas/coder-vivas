import { Box } from '@mui/material'
import Item from './Item'

const ItemList = ({ items, category }) => {
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
      {
        items.map( item => (
          <Item key={ item.id } item={ item } />
        ))
      }
    </Box>
  )
}

export default ItemList