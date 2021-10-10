import React from 'react'
import {Grid,Box,Button} from "@material-ui/core";
import { useRef } from 'react';
import cv from "../images/cv.png";
const Checkcv = () => {
    return (
        <div className="checkcv">
            <h1 style={{textAlign:"center" ,color:
            "black",fontFamily:" 'Akronim', cursive"}}> My Curriculum Vitae (CV)</h1>
            <Grid container justifyContent="center">
                <Grid sm={8} container justifyContent="center"> 
                <Grid sm={6}>
                <Box display="flex" justifyContent="center">
                        <img src={cv} alt="" width="85%" style={{border:"2px solid black"}}/>
                    </Box>
                </Grid>
                <Grid sm={6}>
                <Box marginTop="50%" display="flex" justifyContent="center" alignItems="center" className="cvdownload"> 
                <div style={{marginTop:"3%"}}> <a href="https://docs.google.com/document/d/1RVAMWpHAjaR59-hcOvdtVJ8pnJeXXxDOlrhubs09w6M/edit?usp=sharing"> <Button size="large" variant="contained" color="primary">Download CV</Button></a></div>
                </Box>
                </Grid>
                </Grid>
            </Grid>
            <br />
        </div>
    )
}

export default Checkcv;