import { Box, Card, CardContent, Skeleton } from '@mui/material'

export default function ItemSkeleton() {
  return (
    <Card elevation={0}>
      <Skeleton variant='rectangular' width='100%' height={200} />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '260px', gap: 2 }}>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Skeleton variant='text' width='60%' height='40px' sx={{ margin: 'auto' }} />
          <Skeleton variant='text' width='100%' height='20px' sx={{ margin: 'auto' }} />
          <Skeleton variant='text' width='100%' height='20px' sx={{ margin: 'auto' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
          <Skeleton variant='text' width='30%' height='45px' sx={{ margin: 'auto' }} />
          <Skeleton variant='rectangular' width='100%' height='30px' sx={{ margin: 'auto', borderRadius: '20px' }} />
          <Skeleton variant='text' width='50%' height='15px' sx={{ margin: 'auto' }} />
        </Box>

      </CardContent>
    </Card>
  )
}
