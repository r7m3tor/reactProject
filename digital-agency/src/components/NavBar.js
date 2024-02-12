import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'; 
import "../assets/style.css"
import logo from '../assets/logo.png';
function NavBar() {

  return (
    <AppBar position="static" sx={{background:"none", boxShadow:"none"}}>
      <Container maxWidth="xl">
      <nav>
        <div class="logo-box">
            <h1 class="logo">
                <a href="/">
                    <img src={logo} className='logo'/>
                </a>
            </h1>
        </div>
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">work</a></li>
            <li><a href="#">product</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </nav>
      </Container>
    </AppBar>
  );
}
export default NavBar;