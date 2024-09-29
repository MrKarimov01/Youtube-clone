import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Channels,Main,VideoDetail,Search,Navbar  } from './../index'

const app = () => {
  return (
    <Box>
        <Navbar/>
     

        <Routes>
            <Route index element={<Main />}/>
            <Route path='/channel/:id' element={<Channels/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/search/:id' element={<Search/>}/>
        </Routes>

    </Box>
  )
}

export default app
