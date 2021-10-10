import React from 'react'
import {Grid,Box,Button} from "@material-ui/core";
import ds from "../images/skills/ds.jpg";
import language from "../images/skills/language.png";
import ml from "../images/skills/ml.png";
import web from "../images/skills/web.jpg";
import core from "../images/skills/core.webp";
import img from "../images/back.jpeg";
const Skills = () => {
    return (
      <>
      
      <div style={{position:"relative",backgroundImage: `url(${img})`,width:"100%",height:"120vh",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <br />
            <h2 style={{textAlign:"center", marginBottom:"4%"}}>My Skills</h2>
            <Grid container justifyContent="center" style={{backgroundBlendMode:"unset"}}>
                <Grid sm={11} container justifyContent="space-evenly" className="skill_card">
                <Grid item sm={3} className="card-grid">
                    <div className="card-icon"><img src={ds} alt="Pic not available" width="60%"/></div>
                    <div className="card-content">
                        <h4>DS / ALGO</h4>
                        <div>
                          <ul>
                          <li> Good knowledge of Data Structures and Algorthims. </li>
                          <li>Code Optimization</li>
                          <li>Link :<a href="#" style={{textDecoration:"none",color:"lightsalmon"}}> Leetcode Profile</a></li>
                          </ul>
                        </div>
                        </div>
                </Grid>
                <Grid item sm={3} className="card-grid">
                    <div className="card-icon"><img src={web} alt="Pic not available" width="65%"/></div>
                    <div className="card-content">
                        <h5>Full Stack Web Developer</h5>
                        <div>
                          <ul>
                          <li>MERN Developer </li>
                          <li>Great UI designing</li>
                          <li>Solid Backend & Database Design</li>
                          </ul>
                        </div>
                        </div>
                </Grid>
                <Grid item sm={3} className="card-grid">
                    <div className="card-icon"><img src={language} alt="Pic not available" width="70%"/></div>
                    <div className="card-content">
                        <h5>Multiple Programming Languages</h5>
                        <div>
                          <ul>
                          <li>C++</li>
                          <li>Python</li>
                          <li>Javascript</li>
                          </ul>
                        </div>
                        </div>
                </Grid>
                
                <Grid item sm={3} className="card-grid">
                    <div className="card-icon"><img src={ml} alt="Pic not available" width="50%"/></div>
                    <div className="card-content">
                        <h5>Machine Learning</h5>
                        <div>
                          <ul>
                          <li>A machine Learning enthusiast</li>
                          <li>Worked on a deep learning project</li>
                          <li>Have basic knowledge of opencv,pandas,numpy etc..</li>
                          </ul>
                        </div>
                        </div>
                </Grid>
                <Grid item sm={3} className="card-grid">
                    <div className="card-icon"><img src={core} alt="Pic not available" width="45%"/></div>
                    <div className="card-content">
                        <h5>CORE SUBJECTS</h5>
                        <div>
                          <ul>
                          <li>Object Oriented Programming (OOPs)</li>
                          <li>Database Management Systmem (DBMS)</li>
                          <li>Operating System (OS)</li>
                          </ul>
                        </div>
                        </div>
                </Grid>
               
            </Grid>
            </Grid>
            
        </div>
        
        </>
    )
}

export default Skills
