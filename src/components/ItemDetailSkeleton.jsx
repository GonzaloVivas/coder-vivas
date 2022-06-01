import { Box, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function ItemDetailSkeleton() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: grey[800],
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '600px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: { xs: '100%', md: '50%' },
          height: { xs: '280px', sm: '420px', md: 'auto' },
          overflow: 'hidden',
          borderRadius: '20px'
        }}
      >
        <Skeleton variant='rectangular' height='100%' width='100%' sx={{ flexShrink: 1, minWidth: '100%' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '50%' },
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: { xs: 'auto', md: '400px' },
          margin: 'auto'
        }}
      >

        <Skeleton variant='rectangular' height='30px' sx={{ marginBottom: '20px' }} />
        <Skeleton variant='rectangular' width='100%' height='16px' />
        <Skeleton variant='rectangular' width='80%' height='16px' sx={{ margin: 'auto' }} />
        <Skeleton variant='rectangular' width='100%' height='16px' sx={{ margin: 'auto' }} />
        <Skeleton variant='rectangular' width='90%' height='16px' sx={{ margin: 'auto' }} />
        <Skeleton variant='rectangular' width='30%' height='32px' sx={{ margin: 'auto', marginTop: '20px' }} />

        <Box sx={{ display: 'flex' }}>
        </Box>
        <Box width={190} sx={{ marginX: 'auto' }}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <Skeleton variant='circular' width='40px' height='40px' sx={{ margin: 'auto', marginTop: '10px' }} />
              <Skeleton variant='rectangular' width='40px' height='24px' sx={{ marginTop: '10px', marginRight: '40px', marginLeft: '40px' }} />
              <Skeleton variant='circular' width='40px' height='40px' sx={{ margin: 'auto', marginTop: '10px' }} />

            </Box>
            <Skeleton variant='rectangular' width='200px' height='40px' sx={{ margin: 'auto', marginTop: '10px', borderRadius: '20px' }} />

          </Box>
        </Box>

      </Box>
    </Box>
  )
}
