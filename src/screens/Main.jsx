import React from 'react';
import {  Grid, Paper } from '@material-ui/core'
import useStyles from "../styles"

export default props => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid item xs={12}>
                <Paper className={classes.formPaper}>
                </Paper>
            </Grid>
        </Grid>
    )
}