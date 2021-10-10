import React from 'react';
import {Grid,Box,Button} from "@material-ui/core";
import my_icon from "../images/my_icon.png";


const Header = () => {
  function getCoords() { // crossbrowser version
    var body =document.body,
    html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
   height-=650;
   window.scrollTo(0,height);
}
  return (
        <>
          <header>
        <Box bgcolor="black">
         <Grid container justifyContent="center" >
            <Grid sm={8} container className="navbar" style={{backgroundColor:"black"}}>
              <Grid className="nav-left" sm={10} container  > 
                  <Grid item sm={1} className="logo" >
                  <img src={my_icon} alt="Not available" width="45px"/>
                  </Grid>
                  
                  <Grid item  sm={10} container alignItems="center" justifyContent="space-around">
                    <Grid sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" color="white" className="navlink"  onClick={()=>{window.scrollTo(0,0);}}>Home</Button></Box></Grid>
                    <Grid sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" color="white" className="navlink"  onClick={()=>{window.scrollTo(0,523);}}>Education</Button></Box></Grid>
                    <Grid sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" color="white" className="navlink"  onClick={()=>{window.scrollTo(0,1000);}}>Skills</Button></Box></Grid>
                    <Grid sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" color="white" className="navlink"  onClick={()=>{window.scrollTo(0,1780);}}>Projects</Button></Box></Grid>
                    <Grid sm={2}><Box  display="flex" justifyContent="center"><Button variant="outlined" color="white" className="navlink" id="extra" onClick={()=>{window.scrollTo(0,2170);}}>E_Curricular</Button></Box></Grid>
                  </Grid>
              </Grid>
              <Grid className="nav-right" sm={2} style={{display:"flex" ,justifyContent:"flex-end"}}>
                <Button variant="contained" size="small" color="primary" className="navbar-btn" onClick={getCoords}>Contact</Button>
              </Grid>
            </Grid>
         </Grid>
         </Box>
         </header>
        </>
    )
}

export default Header;
