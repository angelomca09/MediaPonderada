import React, { useEffect } from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { addMedia, editMedia, setMedia, setMediaIndex } from "../redux/actions"

const MediaCard = (props) => {

    const classes = useStyles();

    const media = props.media
    const colunas = props.colunas

    const preencheValoresDaMedia = () => {
        var mediaPreenchida = Object.assign({}, media)
        if (colunas.length > mediaPreenchida.valores.length)
            mediaPreenchida.valores = colunas.map((coluna, index) => mediaPreenchida.valores[index] ? mediaPreenchida.valores[index] : 0)
        return mediaPreenchida
    }

    useEffect(() => {
        props.setMedia(preencheValoresDaMedia())
        // eslint-disable-next-line
    }, [])

    const alteraId = event => props.setMedia({ id: event.target.value, valores: media.valores })

    const alteraValores = (event, index) => {
        var valoresCopia = [...media.valores];
        valoresCopia[index] = +event.target.value;
        props.setMedia({ id: media.id, valores: valoresCopia })
    }

    const submit = (event) => {
        event.preventDefault();
        var mediaPreenchida = preencheValoresDaMedia(media, colunas)
        if (Number.isInteger(props.mediaIndex)) props.editMedia(props.mediaIndex, mediaPreenchida)
        else props.addMedia(mediaPreenchida)
        props.setMedia({ id: "", valores: colunas.map(() => 0) })
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
                                    <td><Input value={props.media.valores[index]} type={"number"}
                                        onChange={event => alteraValores(event, index)} />
                                    </td>
                                </tr>)}
                            <tr>
                                <td></td>
                                <td><button>{(props.mediaIndex !== null )? "Editar Média" : "Adicionar Média"}</button></td>
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