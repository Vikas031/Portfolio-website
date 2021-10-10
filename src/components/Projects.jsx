import React from 'react'
import {Grid,Box,Button} from "@material-ui/core";
import { useState } from 'react';
import face from "../images/projectsc/facemask.jpg";
import maze from "../images/projectsc/maze.png";
import hotel1 from "../images/projectsc/hotel1.png";
import hotel2 from "../images/projectsc/hotel2.png";
import hotel3 from "../images/projectsc/hotel3.png";
import hotel4 from "../images/projectsc/hotel4.png";
import img from "../images/back.jpeg";
function project1()
{
    return (
        <>
        <Grid className="pro" container justifyContent="space-evenly">
            <Grid sm={5}>
            <br />
            <center><h3> FaceMask Detection (Deep Learning Project)</h3>
            </center>
            <div>
            This deep learning projects helps in finding out whether a person is  wearing a mask or not using live image or live video of the person using deep learning concept.
            </div>
             <br />

            <div>
            This project uses the concept of Convulational Neural Network of Deep Learning for training the model by using image dataset to determine whether a person is wearing mask or not .
            </div>
            <br />
            <div>See complete project :</div>
            <div>
                Github Link : <a href="https://github.com/Vikas031/Face-Mask-Detection-System-Deep-Learning-">https://github.com/Vikas031/Face-Mask-Detection-System-Deep-Learning-</a>
            </div>

            </Grid>
            <Grid sm={4}>
            <img src={face} alt="" width="100%" />
            </Grid>

        </Grid>
        </>
    )
}

function project2()
{
    return (
        <>
        <Grid className="pro"  container justifyContent="space-evenly">
            <Grid sm={4}>
                <br />
            <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={hotel1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hotel2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hotel3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hotel4} alt="Fourth slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
            </Grid>

            <Grid sm={5}>
                <br />
                <center><h3>Hotel Management System</h3></center>
                <br />
                <div>
                This is a web-based application project for hotel management system.

                By using this website the user can see the features and services offered by the hotel and can book rooms as per his requirement.
                   <br /> 
                Also there is admin section in the website which can only be accessed by the designated person by the hotel with a login id. In admin section, the admin can perform operations like booking, unbooking, editing the customer details etc.
                </div>
                <br />
                <div>
                    Language Used : HTML ,CSS, JAVASCRIPT
                    <br /> 
                    For Backend : PHP , MYSQL
                </div>

                <div>
                    Github Link : <a href="https://github.com/Vikas031/Hotel-Management-Web-D-">https://github.com/Vikas031/Hotel-Management-Web-D-</a> 
                </div>
            </Grid>

        </Grid>
        </>
    )
}

function project3()
{
    return (
        <>
        <Grid className="pro" container justifyContent="space-evenly">
            <Grid sm={5}>
            <br />
            <center><h3> Maze Solver (Python) </h3>
            </center>
            <div>
            This project show us the shortest possible path in a maze using dijsktra's algorithm. 
            The dijsktra's algorithm has been implemented using min -heap priority queue.
            The image pixels are considered as node and the edge values are calculalted using Euclidean 
            square distance formula based on the rgb intensity of each pixel.
            </div>
             <br />

            <div>
            Language Used : Python
            </div>
            <br />
            <div>
                Github Link : <a href="https://github.com/Vikas031/Maze-Solver-Using-Dijsktra-s-Algo-Python-">hhttps://github.com/Vikas031/Maze-Solver-Using-Dijsktra-s-Algo-Python-</a>
            </div>

            </Grid>
            <Grid sm={4}>
            <img src={maze} alt="" width="100%" />
            </Grid>

        </Grid>
        </>
        
    )
}

const Projects = () => {
    const [x1, setx1] = useState(true)
    const [x2, setx2] = useState(true)
    const [x3, setx3] = useState(true)
    return (
    <>
    <div>
        <br /><br />
     <Grid container justifyContent="center" style={{backgroundColor:"black" ,color:"white"}}>
         <Grid sm={11} container justifyContent="center">
             <Grid sm={10}> 
             <Box className="btn-grp">
                 <br /><br /><br />
                 <center><h1>PROJECTS</h1></center>
                 <div className="btn-wrap">
                     <Button size="large"  className="drop-btn" fullWidth variant="contained" color="primary" onClick={()=>{setx1(!x1)}}>
                     Project 1: Face Mask Detection 
                     <span style={{position:"absolute",right:"0",paddingRight:"2%",}}>Click ME</span>
                     </Button></div>
                 <div>{x1?"":project1()}</div>
                 <div className="btn-wrap">
                    <Button size="large"  className="drop-btn" fullWidth variant="contained" color="primary" onClick={()=>{setx2(!x2)}}>Project 2: Hotel Management System
                    <span style={{position:"absolute",right:"0",paddingRight:"2%",}}>Click ME</span>
                    </Button></div>
                <div>{x2?"":project2()}</div>
                
                 <div className="btn-wrap">
                     <Button size="large" className="drop-btn" fullWidth variant="contained" color="primary" onClick={()=>{setx3(!x3)}}>Project 3: Maze Solver Using Dijsktra
                     <span style={{position:"absolute",right:"0",paddingRight:"2%",}}>Click ME</span>
                     </Button></div>
                     <div>{x3?"":project3()}</div>
                     <br /><br /><br />
             </Box>
             </Grid>
         </Grid>
     </Grid>
     </div>
    <br /><br /><br />
    </>
    )
}

export default Projects
