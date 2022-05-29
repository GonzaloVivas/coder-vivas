import { Link } from "react-router-dom";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CartDetailTableRow from "./CartDetailTableRow";

export default function CartDetailTable({ cart, totalInCart, totalAmountInCart, cartClear }) {

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: grey[800],
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='h5' component='h2' sx={{ marginBottom: '10px' }}>Carrito</Typography>

      <TableContainer component={Paper} sx={{ borderRadius: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Precio unitario</TableCell>
              <TableCell>Precio Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cart.map( item => (
                <CartDetailTableRow key={item.id} item={item} />
              ))
            }
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                <Typography variant='body1'>
                  Importe total: $
                  {
                    totalAmountInCart
                  }
                  &nbsp;({ totalInCart } producto/s)
                </Typography>
              </TableCell>
              <TableCell colSpan={2}>
                <Link to='/checkout' className='button-link large' style={{ marginRight: 10 }}>Finalizar compra</Link>
                <Button variant='dangerUnfilled' onClick={cartClear}>Vaciar carrito</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  )
}
