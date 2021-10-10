import React from 'react';
import my_icon from "../images/my_icon.png";
import {Grid,Box,Button} from "@material-ui/core";

const Header = () => {
    function skill(){
        const obj=document.getElementsByClassName("skills");
        var value=obj[0].offsetTop;
        window.scrollTo(0,value-27);
      }
      
      function project(){
        const obj=document.getElementsByClassName("project");
        var value=obj[0].offsetTop;
        window.scrollTo(0,value-70);
      }
      function education(){
        const obj=document.getElementsByClassName("education");
        var value=obj[0].offsetTop;
        window.scrollTo(0,value-150);
      }
      
      function contact(){
        const obj=document.getElementsByClassName("contact");
        var value=obj[0].offsetTop;
        window.scrollTo(0,value);
      }
      function gotocv(){
        const obj=document.getElementsByClassName("checkcv");
        var value=obj[0].offsetTop;
        window.scrollTo(0,value-70);
    }  
    return (
        <>
        <header>
        <Box bgcolor="black">
         <Grid container justifyContent="center" >
            <Grid sm={8} xs={12} container className="navbar" style={{backgroundColor:"black"}}>
              <Grid className="nav-left" xs={10} sm={10} container justifyContent="flex-start"  > 
                  <Grid item sm={1} xs={0} className="logo" >
                  <img src={my_icon} alt="Not available" width="45px"/>
                  </Grid>
                  
                  <Grid item  sm={11} xs={10}container alignItems="center" justifyContent="space-evenly">
                    <Grid xs={2} sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" size="small" color="white" className="navlink"  onClick={()=>{window.scrollTo(0,0);}}>Home</Button></Box></Grid>
                    <Grid xs={2} sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" size="small" color="white" className="navlink"  onClick={education}>Education</Button></Box></Grid>
                    <Grid xs={2} sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" size="small" color="white" className="navlink"  onClick={skill}>Skills</Button></Box></Grid>
                    <Grid xs={2} sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" size="small" color="white" className="navlink"  onClick={project}>Projects</Button></Box></Grid>
                    <Grid xs={3} sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" size="small" color="white" className="navlink" id="extra" onClick={gotocv}>E_Curricular</Button></Box></Grid>
                  </Grid>
              </Grid>
              <Grid className="nav-right" xs={2} sm={2} style={{display:"flex" ,justifyContent:"right"}}>
                <Button variant="contained" size="small" color="primary" className="navbar-btn" onClick={contact}>Contact</Button>
              </Grid>
            </Grid>
         </Grid>
         </Box>
         </header>
        </>
    )
}

export default Header
