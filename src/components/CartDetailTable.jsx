import { Link } from "react-router-dom";
import { Box, Button, Link as MuiLink , Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import CartDetailTableRow from "./CartDetailTableRow";

export default function CartDetailTable({ cart, totalInCart, totalAmountInCart, cartClear }) {

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

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
              {
                largeScreen && (
                  <>
                    <TableCell></TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell>Precio unitario</TableCell>
                    <TableCell>Precio Total</TableCell>
                    <TableCell></TableCell>
                  </>
                )
              }
            </TableRow>
          </TableHead>
          <TableBody>

            {
              cart.map( item => (
                <CartDetailTableRow key={item.id} item={item} largeScreen={largeScreen} />
              ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ width: '100%', backgroundColor: grey[900], borderRadius: '20px', padding: '20px', marginTop: '20px' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Importe total: $
          {
            totalAmountInCart
          }
          &nbsp;({totalInCart} producto/s)
        </Typography>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, marginTop: '20px', gap: { sm: '20px' } }}
        >
          <MuiLink component={Link} to='/checkout' className='button-link large' sx={{ display: 'flex', alignSelf: 'flex-start', margin: { xs: 'auto', sm: 'unset' } }}>Finalizar compra</MuiLink>

          <Button
            variant='dangerUnfilled'
            onClick={cartClear}
            sx={{ marginTop: { xs: '20px', sm: 0} }}
          >
            Vaciar carrito
          </Button>
        </Box>

      </Box>

    </Box>
  )
}
