import React from 'react'
import {Grid,Box,Typography} from "@material-ui/core";
import img from "../images/back.jpeg";
import video from "../images/video.mp4";
const Contact = () => {
    return (
        
        <div style={{position:"relative",backgroundImage:`linear-gradient(#dbd3d352,#bdbbc9),url(${img})`,width:"100%",height:"80vh",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <br />
            <br />
            <Grid container justifyContent="center" >
                <Grid sm={9} >
                    <Box border="2px solid black" borderRadius="2rem" bgcolor="white">
                        <Grid container justifyContent="space-evenly">
                            <Grid sm={4} container justifyContent="center" alignItems="center">
                            <br />
                            <Grid >
                            <video width="110%" height="240" autoPlay muted loop>  
                            <source src={video} type="video/mp4"/>  
                            Your browser does not support the html video tag.  
                            </video>                    
                        </Grid>
                            </Grid>

                            <Grid sm={6} className="contact_info">
                                <br />
                                <center><Typography variant="h3">Contact ME</Typography></center>
                                <br />
                                <div style={{padding:"3%",backgroundColor:"whitesmoke"}}>
                                <h5>PHONE NO :</h5>
                                <div>8800710860</div>
                                <br />

                                <h5>E-MAIL :</h5>
                                 <div><a href="mailto:vikasbhandari031@gmail.com" target="_blank">vikasbhandari031@gmail.com</a></div>
                                 <br />

                                 <h5>LINKED-IN :</h5>
                                 <div><a href="https://www.linkedin.com/in/vikas-bhandari-771b1619b/_">https://www.linkedin.com/in/vikas-bhandari-771b1619b/_</a></div>
                                 </div>
                            </Grid>

                        </Grid>
                        <br />
                        <br />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
