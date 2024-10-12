import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiService } from '../service/api.service';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Vibration } from '@mui/icons-material';
import {Videos}from "../index"

const VideoDetail = () => {
  const [videodetail, setVideodetail] = useState(null);
  const [realteData,setRealteData]= useState([])
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
        setVideodetail(data.items[0]);
        const realteData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setRealteData(realteData.items)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videodetail) return <div>Loading...</div>; // Loading holati

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{flexDirection: {xs: "column",md:"row"}}}>
        <Box sx={{ width: {xs: "100%",md:"75%"}}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="videoRplayer"  controls/>
          {videodetail.snippet.tags && videodetail.snippet.tags.map((item, index) => (
            <Chip
              label={item}
              key={index}
              sx={{ marginTop: '10px', cursor: "pointer", ml: '10px' }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant='outlined'
            />
          ))}
          <Typography variant='h5' fontWeight={'bold'} p={2}>
            {videodetail.snippet.title}
          </Typography>
          <Typography variant='subtitle2' p={2} sx={{ opacity: ".7" }}>
            {videodetail.snippet.description}
          </Typography>

          <Stack direction={"row"} gap={"20px"} alignItems={"center"} py={1} px={2}>
            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={'center'} gap={"3px"}>
              <Vibration />
              {parseInt(videodetail.statistics.viewCount).toLocaleString()} views
            </Stack>
            
            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={'center'} gap={"3px"}>
              <FavoriteOutlined />
              {parseInt(videodetail.statistics.likeCount).toLocaleString()} likes
            </Stack>

            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={'center'} gap={"3px"}>
              <MarkChatRead />
              {parseInt(videodetail.statistics.commentCount).toLocaleString()} comments
            </Stack>
          </Stack>
          <Link to={`/channel/${videodetail?.snippet?.channelId}`}>
          <Stack direction={"row"} py={1} px={2} alignItems={"center"}>
            <Avatar
              alt={videodetail.snippet.channelTitle}
              src={videodetail.snippet.thumbnails.default.url}
              />
            <Typography variant='subtitle2' color='gray'>
              {videodetail.snippet.channelTitle}
              <CheckCircle sx={{fontSize: "12px" ,color: "gray",ml: "5px"}}/>
            </Typography>
          </Stack>
            </Link>
        </Box>
        <Box sx={{ width: {xs: "100%",md:"25%"}}} px={2} py={{md: 1, xs: 5}} justifyContent={"center"}
          alignItems={"center"}
          
        >
          <Videos videos_data={realteData}/>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoDetail;

