import React from 'react'
import {Grid,Box,Typography} from "@material-ui/core";
import id from "../images/id_card.jpg";
const Education = () => {
    return (
        <>
        <Grid className="education" container justifyContent="center" style={{backgroundColor:"transparent"}}>
        <Grid xs={11} sm={10}>
            <Box boxShadow="1px 1px 3px" padding="4%">
           <Grid container justifyContent="space-evenly">
            <Grid xs={3}>
            <Box padding="2%" display="flex" alignItems="center" justifyContent="center">
            <img src={id} alt="Pic not available" width="80%" className="my_id"/>
            </Box>
            </Grid>
             
            <Grid xs={8} >
            <Box paddingLeft="0%">
            <h2 className="edu-top" style={{textAlign:"center" , fontFamily:"'Poppins', sans-serif"}}> Education</h2> 
                    <br />
                <Typography color="primary" variant="subtitle2">Current</Typography>
                <Box boxShadow="3px 2px 5px 1px black">
                <Grid container justifyContent="center">
                    <Grid xs={4}>3rd Year <br /> Information Technology</Grid>
                    <Grid xs={4}>B.Tech Delhi Technological University</Grid>
                    <Grid xs={4}>9.17(CGPA)</Grid>
                </Grid>
                </Box>
                <br />

                <Box boxShadow="3px 2px 5px 1px black">
                <Grid container justifyContent="center">
                    <Grid xs={4}> 12th Class </Grid>
                    <Grid xs={4}>Rashtra Shakti Vidyalaya (CBSE)</Grid>
                    <Grid xs={4}>95.6%</Grid>
                </Grid>
                </Box>
                <br />
                <Box boxShadow="3px 2px 5px 1px black">
                <Grid container justifyContent="space-between">
                    <Grid xs={4}>10th Class</Grid>
                    <Grid xs={4}>Rashtra Shakti Vidyalaya (CBSE)</Grid>
                    <Grid xs={4}>9.8 CGPA</Grid>
                </Grid>
                </Box>

            </Box>
            </Grid>
            </Grid>
            </Box>
            </Grid> 
            </Grid>
            <br />
            <br />
        </>
    )
}

export default Education
