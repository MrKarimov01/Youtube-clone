import { Paper ,IconButton } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { colors } from './../../constants/colors'
import { useNavigate } from 'react-router-dom';

const searchBar = ({display}) => {
  const [value,setValue]= useState("")
  const navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault();
    if(value){
      navigate(`/search/${value}`)
    }
  }
  return (
    <Paper component={"form"} 
      onSubmit={handleSubmit}
      className={display? "searchF active": "searchF"}
      sx={{
        border: `1px solid ${colors.secondary}`, 
        pl:2, 
        boxShadow:"none",
        mr:5,
        
        
      }}
      
      >
      <input type="text" placeholder='Search...' className='search-bar' value={value} onChange={(e)=>{ setValue(e.target.value)}}/>
      <IconButton type='submit'>
        <SearchIcon/>
      </IconButton>
    </Paper>
  )
}

export default searchBar
