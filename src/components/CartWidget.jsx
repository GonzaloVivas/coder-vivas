import React from 'react'
import { Button } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

export default function CartWidget({ cartCount }) {
  return (
    <Button
      variant='notBg'
    >
      <ShoppingCart />
      { cartCount }
    </Button>
  )
}
