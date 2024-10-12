import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api.service'
import { Box, Container, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Videos } from '..'


const search = () => {
  const {id} = useParams()
  const [videos,setVideos] = useState([])



  useEffect(()=>{
    const getData = async () => {
      document.title = id + " - Streamlinedev"
      try {
        
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData()
  },[id])
  
  return (
    <Box
      p={2}
      sx={{height: "90vh"}}
    >
      <Container maxWidth={"90%"}>
        <Typography variant='h4' fontWeight={"bold"} mb={2}>
          Search resolts for <span style={{color:colors.secondary}}>{id}</span> videos
        </Typography>
          <Videos videos_data={videos}/>
      </Container>

    </Box>
  )
}

export default search
