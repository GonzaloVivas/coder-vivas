import React from 'react'
import { Box, useTheme } from '@mui/material'

export default function ItemListContainer() {

  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        color: theme.palette.primary.light
      }}
    >
      <h2>{`<ItemListContainer />`}</h2>
    </Box>
  )
}
