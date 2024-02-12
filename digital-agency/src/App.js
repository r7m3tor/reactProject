import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextBlock from './components/TextBlock.js';
import mainImg from './assets/mainImg.jpeg';
import img2 from './assets/img2.jpg';
import  Button  from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MediaCard from './components/Cards.js';
import FeedbackComp from './components/FeedbackComp.js';


function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Container maxWidth="lg">
        <Box sx={{height: '100vh' }} >
          <NavBar></NavBar>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={7} 
              display="grid"
              direction="row"
              alignItems="center"
              >
                  <TextBlock></TextBlock>
              </Grid>
              <Grid item xs={5}>
              <div>
                <img id="bloc" src={mainImg} alt="Img"/>
                <img id="bloc2" src={mainImg} alt="Img"/>
              </div>
              </Grid>
            </Grid>
          </Box>

          <Box marginTop="8%" marginBottom="8%">
          <div class="row-block">
            <div class="col-3"> <h3>Design</h3> <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad aliquam consectetur consequuntur</p> </div>
    
            <div class="col-3"> <h3>Development</h3> <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad aliquam consectetur consequuntur</p> </div>
    
            <div class="col-3"> <h3>Testing</h3> <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusamus ad aliquam consectetur consequuntur</p> </div>
          </div>
          </Box>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6}
                display="grid"
                direction="row"
                alignItems="center"
                justifyContent="center">
              <div id="block2">
                <img id="train-img" src={img2} alt="Img"/>
              </div>
              </Grid>
              <Grid item xs={6} 
                    display="grid"
                    direction="row"
                    alignItems="center">
                  <div id="block1"><p>ABOUT US</p>
                    <h1>Design and Develop <br/> For Better Solution</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam consectetur consequuntur cum excepturi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam consectetur consequuntur cum
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam consectetur consequuntur cum </p>
                    <Button id="btn-main" variant="contained">Get in touch</Button>
                  </div>
              </Grid>
            </Grid>
          </Box>

          <Box marginTop="8%">
            <div class="portfolio-head">
              <h1> <span>PORTFOLIO</span> <br/>
                View Our Case Studies
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</p>
            </div>
              <div class="portfolio-main">
              <div class="photo portfolio-img1">
                <ArrowCircleRightOutlinedIcon  fontSize='large' sx={{color:'white', position:"absolute", marginRight:7, marginBottom:2,}}/>
            </div>
            <div class="photo portfolio-img2">
                <ArrowCircleRightOutlinedIcon fontSize='large' sx={{ color:'white', position:"absolute", marginRight:7, marginBottom:2,}}/>
            </div>
              <div class="photo portfolio-img3">
                <ArrowCircleRightOutlinedIcon  fontSize='large' sx={{color:'white', position:"absolute", marginRight:7, marginBottom:2,}}/>
            </div>
            </div>
          </Box>
          <Box>
            <div class="client-feed">
              <div class="client-head">
                <p>TESTIMONY</p>
                <h1>What Do Our Clients Says <br/> About Us</h1>
              </div>
              <FeedbackComp/>
            </div>
          </Box>

          <Box>
            <div class="client-feed">
              <div class="client-head">
                <p>BLOG</p>
                <h1>Read Our News</h1>
              </div>
              <div class="blog-cards">
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
              </div>
            </div>
          </Box>

          <Box>
            <div class="start-yourprj-block">
              <h1 style={{fontWeight:600, color:"aliceblue"}}>We Like To Start Your <br/> Project With Us</h1>
              <Button id="btn-main" variant="contained">Get in touch</Button>
            </div>
          </Box>
          

          <Footer></Footer>
 
        </Box>

    </Container>
  );
}

export default App;
