import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core'
import MediaCard from "../components/MediaCard"
import MediaFormCard from '../components/MediaFormCard';
import FormulaFormCard from '../components/FormulaFormCard';
import { connect } from 'react-redux';
import { read } from '../redux/actions';

const Main = props => {

    useEffect(() => {
        props.read()
        // eslint-disable-next-line
    }, [])

    return (
        <Grid container direction={"row"} spacing={4}>
            <Grid item>
                <MediaCard />
            </Grid>
            <Grid item>
                <MediaFormCard />
            </Grid>
            <Grid item>
                <FormulaFormCard />
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    read: () => dispatch(read())
})

export default connect(null, mapDispatchToProps)(Main);