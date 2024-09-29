import { Box, Stack } from '@mui/material';
import React from 'react'


const videos = ({videos}) => {
  // console.log(videos);
  
  return (
    <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} justifyContent={"start"} alignItems={"center"} gap={2}>

      {videos.map(item=>{
        <Box key={item.id.videoId}>
          {item.id.videoId && ""}
        </Box>
      })}
    </Stack>
  )
}

export default videos
