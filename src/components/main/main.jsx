import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {colors} from "../../constants/colors"
import {Category,Videos} from "./../index"
import { category } from '../../constants';
import { ApiService } from "./../service/api.service"



const main = () => {

  const [selectedC, setSelectedC] = useState("New")
  const [videos, setVideos]= useState([])

  const setselectCatygoryhandler = category => setSelectedC(category)

  useEffect(()=>{
    const getData = async () => {
    try {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedC}`);
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  getData()

  
},[selectedC])
if(selectedC == "New"){
  document.title = "Youtube - Streamlinedev"
}
else{

  document.title = `${selectedC} - Streamlinedev`
}


  return (
   
      <Stack>
      <Category 
        setselectCatygoryhandler={setselectCatygoryhandler}
        selectedC={selectedC}
      />
      <Box p={2} sx={{height: "90hv"}}>
        <Container maxWidth={"90%"}>
          <Typography variant='h4' fontWeight={"bold"} mb={2}>
            {selectedC} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos_data={videos}/>
        </Container>
      </Box>
    </Stack>
 
  )
}

export default main
