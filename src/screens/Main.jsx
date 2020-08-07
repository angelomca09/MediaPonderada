import React from 'react';
import { Grid } from '@material-ui/core'
import MediaCard from "../components/MediaCard"
import MediaFormCard from '../components/MediaFormCard';

export default props => {

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