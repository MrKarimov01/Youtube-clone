import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../constants/colors';
import moment from 'moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const videoCard = ({ data }) => {


  return (
    <Card sx={{ width: { xs: "100%", sm: "360px", md: "320" }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={`/video/${data.id.videoId}`}>
      <CardMedia image={data?.snippet?.thumbnails?.high?.url} alt={data?.snippet?.title} sx={{ width: { xs: "100%", sm: "360px" }, height: "180px" }} />
      </Link>
      <CardContent sx={{ background: colors.primary, height: "200px", position: "relative" }}>
        <>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(data?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant='subtitle1' fontWeight={"bold"}>
            {data?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant='subtitle2' sx={{ opacity: ".6" }}>
            {data?.snippet?.description.slice(0, 70)}
          </Typography>

        </>

        <>
          <Stack direction={"row"} position={"absolute"} bottom={"0"} alignItems={"center"} gap={'5px'}>
            <Avatar src={data?.snippet?.thumbnails?.high?.url} />
            <Typography variant='subtitle2' color={"gray"}>
              {data?.snippet?.channelTitle}
              <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>

          </Stack>
        </>
      </CardContent>
    </Card>
  )
}

export default videoCard