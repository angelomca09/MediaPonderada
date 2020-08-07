import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { deleteMedia, editMedia, setMedia, setMediaIndex } from "../redux/actions"

const MediaCard = (props) => {

    const classes = useStyles();

    const colunas = props.colunas
    const linhas = props.linhas

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <table className="mediaTable">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            {colunas.map(coluna => <th title={`Peso: ${coluna.peso}`}>{coluna.tag}</th>)}
                            <th>Total</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {linhas.map((linha, index) => (
                            <tr key={index}>
                                <td>{linha.id}</td>
                                {linha.valores.map((valor, index) => (colunas[index] ? <td>{valor}</td> : null))}
                                <td>{linha.valores.reduce((soma, valor, index) => (colunas[index] ? (soma + (valor * colunas[index].peso)) : soma), 0).toFixed(2)}</td>
                                <td><button style={{ width: "100%" }} onClick={() => { props.setMedia(linha); props.setMediaIndex(index) }}>E</button></td>
                                <td><button style={{ width: "100%" }} onClick={() => props.deleteMedia(index)}>R</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({
    colunas: state.colunas,
    linhas: state.linhas,
    mediaIndex: state.mediaIndex
})

const mapDispatchToProps = dispatch => ({
    deleteMedia: id => dispatch(deleteMedia(id)),
    editMedia: (id, media) => dispatch(editMedia({ id, media })),
    setMedia: media => dispatch(setMedia(media)),
    setMediaIndex: index => dispatch(setMediaIndex(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)