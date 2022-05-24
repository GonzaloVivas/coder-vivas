import { DeleteForever } from '@mui/icons-material'
import { Box, Fab, Typography } from '@mui/material'
import React from 'react'

export default function CartItemCount({ quantity, stock, onIncrease, onDecrease, onRemove}) {
  return (
    <>
      <Box sx={{ marginX: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Fab
            size='small'
            variant='primary'
            onClick={onDecrease}
          >
            -
          </Fab>
          <Typography variant="body1" sx={{ userSelect: 'none' }}>
            { quantity }
          </Typography>
          <Fab
            disabled={quantity === stock}
            size='small'
            variant='primary'
            onClick={onIncrease}
          >
            +
          </Fab>
          <Fab
            size='small'
            variant='danger'
            onClick={onRemove}
            style={{ marginLeft: 20 }}
          >
            <DeleteForever />
          </Fab>
        </Box>
      </Box>
    </>
  )
}
