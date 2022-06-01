import { Avatar, Box, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

export default function CheckoutDetail({ cart, totalAmountInCart }) {
  return (
    <Card variant='dark' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', borderRadius: '20px', padding: '20px', width: '100%', boxShadow: 'unset' }}>
      
      <Box>
        <Typography variant='h6'>Productos</Typography>
        <List>
          {
            cart.map(({ id, pictureUrl, title, quantity, price }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar alt={title} src={pictureUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={quantity + ' x ' + title}
                  secondary={quantity + ' x $' + price + ' - $' + price * quantity}
                />
              </ListItem>
            ))
          }
        </List>
      </Box>
      
      <Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexDirection: 'row', marginTop: 1 }}>
          <Typography variant='h6'>Importe final:</Typography>
          <Typography variant='h6'>$ {totalAmountInCart}.-</Typography>
        </Box>
      </Box>

    </Card>   
  )
}
