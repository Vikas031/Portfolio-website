import React from 'react';
import {Grid,Box,Button} from "@material-ui/core";
import img from "../images/my_photo.jpeg";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import img2 from "../images/project_back.jpg";
const Home = () => {
  function gotocv(){
      const obj=document.getElementsByClassName("checkcv");
      var value=obj[0].offsetTop;
      window.scrollTo(0,value-70);
  }  
  return (
        <div className="home" style={{backgroundColor:"white"}}>
        <Box className="about-me" style={{position:"relative",backgroundImage: `url(${img2})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
          <br />
          <Grid container justifyContent="center">
            <Grid item xs={10} sm={10} container>
              <Grid sm={6}>
                <Box display="flex" justifyContent="center">
                <img src={img} alt="Loading" width="55%" className="my_image" />
                </Box></Grid>
              <Grid sm={6}>
                <Box color="white" width="90%">
                <h1 style={{marginBottom:"2%",fontFamily:" 'Akronim', cursive",}}>Hello <SentimentVerySatisfiedIcon color="white"/></h1>
                
                <div>I'm <span id="my-name"> Vikas Bhandari</span></div>
                <div> => I'm a 3rd Year Undergrad IT student at Delhi Technological University (DTU).</div>
                <br />
                <div>
                    Welcome to my portfolio website . Here you can check out my technical skill ,educational qualification , Projects , Extra-curricular activities and contact info .</div>
                <br />
                <div>Mail :<a href="mailto:vikasbhandari031@gmail.com">vikasbhandari031@gmail.com</a></div>
                <div style={{marginTop:"3%"}}> <Button variant="contained" color="primary" onClick={gotocv}>Check CV</Button></div>
                </Box></Grid>
            </Grid>
          </Grid>
        </Box>
    
        </div>
    )
}

export default Home;
