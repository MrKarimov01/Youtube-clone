import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({data,marginTop}) => {
    console.log("inner" , data);
    console.log(data?.statistics?.subscriberCount);
    
    
  return (
    <Box 
        sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: {xs: "356px", md:"320px"},
            height: "326px",
            margin: "auto",
            marginTop: marginTop,
        }}
    >
        <Link to={`/channel/${data?.snippet?.channelId?data?.id?.channelId: data?.id}`}>
        
        <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
        <CardMedia
            image={data?.snippet?.thumbnails?.default?.url} alt={data?.snippet?.title}
            
            sx={{
                borderRadius:"50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
                
                
            }}
            
            />
            <Typography variant='h6'>
                {data?.snippet?.title}
                <CheckCircle sx={{fontSize:"14px", color: "gray", ml: "5px"}}/>
            </Typography>
            {
                data?.statistics?.subscriberCount && (

                <Typography sx={{fontSize:"15px", color: "gray", fontWeight: 500}}>
                    {parseInt(data?.statistics?.subscriberCount).toString()} Subscribers
                </Typography>
                )
            }
          
        </CardContent>
            </Link>
      
    </Box>
  )
}

export default ChannelCard
