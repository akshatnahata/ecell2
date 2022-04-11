import { Card, Box, Typography, CardMedia, Grid, Button } from '@mui/material'
import { AccessTime, LocationOn } from '@mui/icons-material';
import React from 'react'

export default function BigCard() {
    return (
        <Card elevation={6} sx={{ display: 'flex', marginX: 5, marginY: 2, borderRadius: 8 }}>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <CardMedia
                        component="img"
                        image="https://miro.medium.com/max/1400/1*g-WrYg2JDifHJ1esUJO3IA.jpeg"
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid item sm={6} xs={12} sx={{ paddingX: 5, paddingY: 5, boxShadow: '5px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Event Name
                    </Typography>
                    <Grid container>
                        <Grid item sx={{ paddingTop: '4px', paddingRight: 1 }}>
                            <AccessTime sx={{ color: "#3DC88F" }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#c4c4c4' }}>
                                Event Time
                            </Typography>
                        </Grid>
                        <Grid item sx={{ paddingTop: '4px', paddingRight: 1, paddingLeft: 3 }}>
                            <LocationOn sx={{ color: "#3DC88F" }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#c4c4c4' }}>
                                Event Location
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginY: 3 }}>
                        <Typography variant="body" sx={{ fontWeight: 600 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                    <Button variant="contained" size="large" disableElevation disableTouchRipple disableFocusRipple disableRipple sx={{
                        borderRadius: 10, marginTop: 2, backgroundColor: "#3DC88F", "&.MuiButtonBase-root:hover": {
                            bgcolor: "#3DC88F"
                        }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Click Here
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}
