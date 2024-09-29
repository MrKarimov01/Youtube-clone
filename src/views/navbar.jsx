import { Box, Stack } from '@mui/material'
import React from 'react'
import {logo} from "./../constants"
import { colors } from './../constants/colors'
import { Link } from 'react-router-dom'
import {SearchBar} from "./../components/index"


const navbar = () => {

    

  return (
  <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={2} sx={{position: "sticky", top: 0, zIndex: 999 , background: colors.primary}}>
    <Link to={"/"}><img src={logo} alt="" height={30} /></Link>
    <SearchBar/>
    <Box/>
  </Stack>
  )
}

export default navbar
