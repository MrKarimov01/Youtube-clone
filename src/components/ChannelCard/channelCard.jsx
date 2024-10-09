import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ChannelCard = ({data}) => {
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
            margin: "auto"
        }}
    >
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
        <CardMedia
            image={data?.snippet?.thumbails?.default?.url} alt={data?.snippet?.title}
            
            sx={{
                borderRadius:"50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3"
                
            }}
        />
            <Typography variant='h6'>
                {data?.snippet?.title}
                <CheckCircle sx={{fontSize:"14px", color: "gray", ml: "5px"}}/>
            </Typography>
            {data?.statistics?.subsriberCount &&(
                <Typography sx={{fontSize:"15px", color: "gray", fontWeight: 500}}>
                    {parseInt(data?.statistics?.subsriberCount).toString()} Subscribers
                </Typography>
            )}
        </CardContent>
      
    </Box>
  )
}

export default ChannelCard
