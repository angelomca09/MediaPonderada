import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";

const MediaCard = (props) => {

    const classes = useStyles();

    const colunas = props.medias.colunas
    const linhas = props.medias.linhas

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <table className="mediaTable">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            {colunas.map(coluna => <th title={`Peso: ${coluna.peso}`}>{coluna.tag}</th>)}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {linhas.map(linha => (
                            <tr>
                                <td>{linha.id}</td>
                                {linha.valores.map((valor, index) => (colunas[index] ? <td>{valor}</td> : null))}
                                <td>{linha.valores.reduce((soma, valor, index) => (colunas[index] ? (soma + (valor * colunas[index].peso)) : soma), 0).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({medias: state.medias})

export default connect(mapStateToProps)(MediaCard)