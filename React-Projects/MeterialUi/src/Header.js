import { IconButton } from '@mui/material'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div>
      <h1>addPoto</h1>
      <IconButton>
      <AddPhotoAlternateIcon/>
      </IconButton>
      <h2>addbank</h2>
      <IconButton>
      <AccountCircleIcon/>
      </IconButton>
      <img src='https://i.ytimg.com/an_webp/ZyQlpX7lCRE/mqdefault_6s.webp?du=3000&sqp=CPHtyp4G&rs=AOn4CLBwLWyQfDSOLa4QFOPaTfF5OFVuQw' alt='pho'/>
    </div>
  )
}

export default Header
