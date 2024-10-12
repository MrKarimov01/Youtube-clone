import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../service/api.service";
import { Box,Container } from "@mui/material";
import ChannelCard from "../ChannelCard/channelCard";
import { Videos } from "../index";

const channel = () => {
    const {id} = useParams()
    const [channelDetail, setChannelDetail] = useState();
    const [videos,setVideos] =useState([])
   
   

    useEffect(()=>{
      const getData = async()=>{
        try {
          const data = await ApiService.fetching(`channels?part=snippet&id=${id}`)
          setChannelDetail(data.items[0])
          console.log("channel",data);
          
          const dataVideo =await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
          setVideos(dataVideo?.items)
        } catch (error) {
          console.log(error);
          
        }
      }
      getData()
    },[id])
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box width={"100%"} height={"200px"} zIndex={10} sx={{backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,backgroundPostion:"center",backgroundSize: "cover",objectFit: "cover"}}/>
        <ChannelCard data={channelDetail}marginTop={"-100px"}/>
      </Box>

      <Container maxWidth={'90%'}>
        {" "}
        <Videos videos_data={videos}/>
      </Container>
    </Box>
  )
}

export default channel
