import { Box, CircularProgress, Skeleton, Stack } from '@mui/material'
import React from 'react'

const loading = () => {
  return (
    <Box minHeight={"90vh"}  sx={{display: "flex" , justifyContent: "start", gap:"20px", flexWrap: "wrap"}}>
      <div  >
        <Skeleton variant="rounded" width={320} height={180} />
        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={120}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={260}/>
        <Skeleton variant="text" sx={{ fontSize: '1.8rem' }} width={320} height={"40px"}/>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div  >
        <Skeleton variant="rounded" width={320} height={180} />
        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={120}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={260}/>
        <Skeleton variant="text" sx={{ fontSize: '1.8rem' }} width={320} height={"40px"}/>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div  >
        <Skeleton variant="rounded" width={320} height={180} />
        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={120}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={260}/>
        <Skeleton variant="text" sx={{ fontSize: '1.8rem' }} width={320} height={"40px"}/>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div  >
        <Skeleton variant="rounded" width={320} height={180} />
        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={120}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={260}/>
        <Skeleton variant="text" sx={{ fontSize: '1.8rem' }} width={320} height={"40px"}/>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div  >
        <Skeleton variant="rounded" width={320} height={180} />
        <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} width={120}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={260}/>
        <Skeleton variant="text" sx={{ fontSize: '1.8rem' }} width={320} height={"40px"}/>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    </Box>
  )
}

export default loading
