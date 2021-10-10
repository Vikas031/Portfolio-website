import React from 'react';
import {Grid,Box,Button} from "@material-ui/core";
import img from "../images/my_photo.jpeg";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const Home = () => {
    return (
        <div>
        <Box className="about-me" bgcolor="black" >
          <br />
          <Grid container justifyContent="center">
            <Grid item sm={10} container>
              <Grid sm={6}>
                <Box display="flex" justifyContent="center">
                <img src={img} width="55%" />
                </Box></Grid>
              <Grid sm={6}>
                <Box color="white" width="90%">
                <h2 style={{marginBottom:"2%",fontFamily:" 'Akronim', cursive",
fontFamily:"'Poppins', sans-serif"}}>Hello <SentimentVerySatisfiedIcon color="white"/></h2>
                
                <div>I'm <span id="my-name"> Vikas Bhandari</span></div>
                <div> => I'm a 3rd Year Undergrad IT student at Delhi Technological University (DTU).</div>
                <br />
                <div>
                    Welcome to my portfolio website . Here you can check out my technical skill ,educational qualification , Projects , Extra-curricular activities and contact info .</div>
                <div style={{marginTop:"3%"}}> <a href="https://docs.google.com/document/d/1RVAMWpHAjaR59-hcOvdtVJ8pnJeXXxDOlrhubs09w6M/edit?usp=sharing"> <Button variant="contained" color="primary">Download CV</Button></a></div>
                </Box></Grid>
            </Grid>
          </Grid>
        </Box>
    
        </div>
    )
}

export default Home;
