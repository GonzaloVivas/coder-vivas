import { Box } from "@mui/material";
import CartDetail from "./CartDetail";

export default function Cart() {

  return (
    <Box
      container
      sx={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <CartDetail />
    </Box>
  )
}
