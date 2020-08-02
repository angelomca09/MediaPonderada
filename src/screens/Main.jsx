import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import useStyles from "../styles"
import MediaCard from "../components/MediaCard"

export default props => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid item xs={12}>
                <Paper className={classes.formPaper}>
                    <Grid container direction={"row"} spacing={4}>
                        <MediaCard/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}