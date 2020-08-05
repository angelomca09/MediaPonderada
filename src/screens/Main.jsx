import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import useStyles from "../styles"
import MediaCard from "../components/MediaCard"
import MediaFormCard from '../components/MediaFormCard';

export default props => {
    const classes = useStyles();

    return (
        <Grid container direction={"row"} spacing={4}>
            <Grid item>
                <MediaCard />
            </Grid>
            <Grid item>
                <MediaFormCard />
            </Grid>
        </Grid>
    )
}