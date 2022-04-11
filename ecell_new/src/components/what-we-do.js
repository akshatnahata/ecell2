import { Grid, Paper, Typography, Box, MobileStepper, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './what-we-do.css'

export default function WhatWeDo() {
    const [activeStep, setActiveStep] = useState(0);

    const data = [["E-Summit", "E-Summit is the flagship event conducted by E-Cell, IIT Indore. It's a conclave of competitions, workshops, panel discussions and speeches from the biggest names in the world of business."],
    ["Lecture Series", "Discover, learn, develop skills that every entrepreneur requires in his journey. A chance to learn from the best experts of the country."],
    ["Engendea", "A day long event where teams have to pitch an idea and develop a business model for the same. Exciting prices always await at the other end."],
    ["Workshops", "An interactive training session offering innovative delivering models where participants gain hands on experience to establish vibrant communities."],
    ["Entrepreneurship Awareness Camp", "EAC was conducted by E-Cell, IIT Indore to spread the entrepreneurial awareness among the students."]]

    const handleNext = () => {
        if(activeStep == 4) {
            setActiveStep(0);
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep == 0) {
            setActiveStep(4);
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    return (
        <Grid container component="main">
            <Grid item xs={12} sm={12} md={6} component={Paper} elevation={2} square style={{ backgroundColor: "black" }}>
                <iframe
                    id="video"
                    width="100%"
                    height={500}
                    src="https://www.youtube.com/embed/ASnDC7AhP3k?rel=0&modestbranding=0&autohide=0&showinfo=0&controls=0"
                    frameBorder="0"
                    allow="accelerometer, autoplay; gyroscope"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} component={Paper} elevation={2} square style={{ backgroundColor: "#FF6B70", height: 500 }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        height: 250,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5" style={{ color: "#FFB5B8", fontWeight: 800, fontStyle: 'italic' }}>
                        What We Do?
                    </Typography>
                    <Typography variant="h4" style={{ color: "#FFFFFF", fontWeight: 800, marginTop: 30 }}>
                        <center>
                            {data[activeStep][0]}
                        </center>
                    </Typography>
                    <Typography variant="body" style={{ color: "#FFFFFF", fontWeight: 800, marginLeft: 50, marginRight: 50, marginTop: 15 }}>
                        <center>
                            {data[activeStep][1]}
                        </center>
                    </Typography>
                </Box>
                <Box sx={{
                    position: "relative",
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <MobileStepper
                        variant="dots"
                        steps={5}
                        position="static"
                        activeStep={activeStep}
                        sx={{ maxWidth: 400, flexGrow: 1, backgroundColor: "#FFFFFF00" }}
                        nextButton={
                            <IconButton disableRipple style={{ color: "white", fontSize: "20px" }} onClick={handleNext}>
                                &gt;
                            </IconButton>
                        }
                        backButton={
                            <IconButton disableRipple style={{ color: "white", fontSize: "20px" }} onClick={handleBack}>
                                &lt;
                            </IconButton>
                        }
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
