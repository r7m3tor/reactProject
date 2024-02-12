import * as React from 'react';
import "../assets/style.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function FeedbackComp(){
    return(
        <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", bgcolor:"pink"}}>
                <p style={{width:"70%", color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.
                </p>
                <p style={{width:"70%", fontWeight:"600"}}>JAMES JOCOVIC <br/> IT CONSULTANT</p>
        </Item>
        <Item sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", bgcolor:"#4270EC"}}>
                <p style={{width:"70%", color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.
                </p>
                <p style={{width:"70%", fontWeight:"600"}}>JAMES JOCOVIC <br/> IT CONSULTANT</p>
        </Item>
        <Item sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",  bgcolor:"pink"}}>
                <p style={{width:"70%", color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.
                </p>
                <p style={{width:"70%", fontWeight:"600"}}>JAMES JOCOVIC <br/> IT CONSULTANT</p>
        </Item>
      </Stack>
    </Box> 
    );
}