import React from 'react'
import {Grid,Box,Typography} from "@material-ui/core";
import img from "../images/back.jpeg";
import video from "../images/video.mp4";
const Contact = () => {
    return (
        
        <div className="contact" style={{position:"relative",backgroundImage:`linear-gradient(#dbd3d352,#bdbbc9),url(${img})`,width:"100%",height:"100%",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <br />
            <br />
            <br />
            <Grid container justifyContent="center" >
                <Grid sm={8} xs={10} >
                    <Box border="2px solid black" borderRadius="2rem" bgcolor="white">
                        <Grid container justifyContent="space-evenly">
                            <Grid sm={4} container justifyContent="center" alignItems="center">
                            <Grid container justifyContent="center">
                                <Grid xs={8} sm={12}>
                            <video width="90%" height="140" className="video" autoPlay muted loop>  
                            <source src={video} type="video/mp4"/>  
                            Your browser does not support the html video tag.  
                            </video> 
                            </Grid>                   
                        </Grid>
                            </Grid>

                            <Grid sm={6} className="contact_info">
                                <center><Typography variant="h5">Contact ME</Typography></center>
                                <div style={{padding:"2%",backgroundColor:"whitesmoke"}}>
                                <h6>PHONE NO :</h6>
                                <div>8800710860</div>
                                <br />

                                <h6>E-MAIL :</h6>
                                 <div><a href="mailto:vikasbhandari031@gmail.com">vikasbhandari031@gmail.com</a></div>
                                 <br />

                                 <h6>LINKED-IN :</h6>
                                 <div><a href="https://www.linkedin.com/in/vikas-bhandari-771b1619b/_">https://www.linkedin.com/in/vikas-bhandari-771b1619b/_</a></div>
                                 </div>
                            </Grid>

                        </Grid>
                        <br />
                    </Box>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Contact
