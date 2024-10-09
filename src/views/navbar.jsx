import { Box, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import {logo} from "./../constants"
import { colors } from './../constants/colors'
import { Link } from 'react-router-dom'
import {SearchBar} from "./../components/index"
import SearchIcon from '@mui/icons-material/Search';


const navbar = () => {
  const [serachActive, setSerachActive] = useState(true)

    

  return (
  <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={2} sx={{position: "sticky", top: 0, zIndex: 999 , background: colors.primary}}>
    <Link to={"/"}><img src={logo} className='logo' alt="" height={30} /></Link>
    <IconButton onClick={()=>{setSerachActive(!serachActive)}} className='btn_srar'>
      <SearchIcon/>
    </IconButton>
    
    <SearchBar display={serachActive}/>
    <Box className="block"/>
  </Stack>
  )
}

export default navbar
