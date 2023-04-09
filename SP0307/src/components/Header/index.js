import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    rang:{
        backgroundColor: theme.palette.tertiary.main,
    },
}));

export default props => (
    <Box py={10} bgcolor="secondary.main" color=" white">
        <Grid container justify="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">

                    <Typography variant="h3"> MBMU </Typography>
                    <Typography variant="h5" justifyContent= "center"> Open Job Listing</Typography>
                    <Button
                     onClick={props.openNewJobModal}
                      variant="contained"
                       color="primary"
                        disableElevation
                        >
                            Post a Job</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>);