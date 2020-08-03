import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import useStyles from "../styles"
import MediaCard from "../components/MediaCard"
import MediaFormCard from '../components/MediaFormCard';

export default props => {
    const classes = useStyles();

    return (
        <Grid container direction={"column"}>
            <Grid item xs={12}>
                <Paper className={classes.formPaper}>
                    <Grid container direction={"row"} spacing={4}>
                        <MediaCard/>
                    </Grid>
                    <Grid container spacing={4}>
                        <MediaFormCard/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}