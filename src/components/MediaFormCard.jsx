import React from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { addMedia, editMedia, setMedia, setMediaIndex } from "../redux/actions"

const MediaCard = (props) => {

    const classes = useStyles();

    const colunas = props.colunas

    const alteraId = event => props.setMedia({ id: event.target.value, valores: props.media.valores })

    const alteraValores = (event, index) => {
        var valoresCopia = [...props.media.valores];
        valoresCopia[index] = event.target.value;
        props.setMedia({ id: props.media.id, valores: valoresCopia })
    }

    const submit = (event) => {
        event.preventDefault();
        var media = Object.assign({}, props.media)
        if (props.colunas.length > media.valores.length)
            media.valores = props.colunas.map((coluna, index) => media.valores[index] ? media.valores[index] : 0)
        if (Number.isInteger(props.mediaIndex)) props.editMedia(props.mediaIndex, media)
        else props.addMedia(media)
        props.setMedia({ id: "", valores: props.colunas.map(() => "") })
        props.setMediaIndex(null)
    }

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <form onSubmit={submit}>
                    <table className="formTable">
                        <thead><tr><th></th><th >Média</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>Descrição</td>
                                <td><Input value={props.media.id}
                                    onChange={alteraId} />
                                </td>
                            </tr>
                            {colunas.map((coluna, index) =>
                                <tr key={index} title={`Peso: ${coluna.peso}`}>
                                    <td>{coluna.tag}</td>
                                    <td><Input value={props.media.valores[index]}
                                        onChange={event => alteraValores(event, index)} />
                                    </td>
                                </tr>)}
                            <tr>
                                <td></td>
                                <td><button>{props.mediaIndex ? "Editar Média" : "Adicionar Média"}</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({
    colunas: state.colunas,
    media: state.media,
    mediaIndex: state.mediaIndex
})

const mapDispatchToProps = dispatch => ({
    addMedia: media => dispatch(addMedia(media)),
    editMedia: (id, media) => dispatch(editMedia({ id, media })),
    setMedia: media => dispatch(setMedia(media)),
    setMediaIndex: index => dispatch(setMediaIndex(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)