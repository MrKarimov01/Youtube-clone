  import { Box, Stack } from '@mui/material';
  import React from 'react'
import { ChannelCard, VideoCard, Loading } from './../index';


  const Videos = ({videos_data}) => {
    if(videos_data.length == 0) return <Loading/>
    
    return (
      <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} justifyContent={"start"} alignItems={"center"} gap={2}>

        {videos_data.map(item=>(
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard data={item}/>}
            
            {item.id.channelId && <ChannelCard data={item}/>}
          </Box>
        ))}
      </Stack>
    )
  }

  export default Videos
