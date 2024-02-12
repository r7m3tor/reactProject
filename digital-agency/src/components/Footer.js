import * as React from 'react';
import "../assets/style.css";
function Footer() {

  return (
    <footer>
    <ul id="ul" >
        <li style={{marginBottom:"20px"}} id="li"><h5 style={{margin:0, height:0, marginBottom:"40px"}}>Our Contact</h5></li>
        <li id="li">Office: 4042 Imperial Road, UK</li>
        <li id="li">Help; (0411) 425 277 / 425</li>
        <li id="li">Email: inbox@finance.com</li>
    </ul>
    <div className='footer-div'>
        <h5>About Us</h5>
        <p style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </p>
    </div>
    <div className='footer-div'>
        <h5>Subscribe</h5>
        <div style={{marginTop:"20px"}}>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <br></br>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
          </div>
    </div> 

</footer>
  );
}
export default Footer;