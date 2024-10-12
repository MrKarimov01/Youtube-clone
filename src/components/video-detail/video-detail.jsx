import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../service/api.service';
import { Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { FavoriteOutlined, MarkChatRead, Tag, Vibration } from '@mui/icons-material';

const VideoDetail = () => {
  const [videodetail, setVideodetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
        console.log(data);
        setVideodetail(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videodetail) return <div>Loading...</div>; // Loading holati

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="videoRplayer" />
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
        </Box>
        <Box width={"25%"}>Suggested video</Box>
      </Box>
    </Box>
  );
}

export default VideoDetail;

