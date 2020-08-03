import React, { useState, use } from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { addMedia } from "../redux/actions"

const MediaCard = (props) => {

    const classes = useStyles();


    const colunas = props.colunas
    const [mediaForm, setMediaForm] = useState(["","",""])
    const alteraForm = (event, index) => {
        var mediaFormCopia = [...mediaForm];
        mediaFormCopia[index] = event.target.value;
        setMediaForm(mediaFormCopia)
    }
    const [descricao, setDescricao] = useState("")

    const submit = (event) => {
        event.preventDefault();
        console.log({id: descricao, valores: mediaForm})
        props.addMedia({id: descricao, valores: mediaForm})
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
                                <td><Input value={descricao}
                                    onChange={event => setDescricao(event.target.value)} />
                                </td>
                            </tr>
                            {colunas.map((coluna, index) =>
                                <tr key={index} title={`Peso: ${coluna.peso}`}>
                                    <td>{coluna.tag}</td>
                                    <td><Input value={mediaForm[index]}
                                        onChange={event => alteraForm(event, index)} />
                                    </td>
                                </tr>)}
                            <tr>
                                <td></td>
                                <td><button>Adicionar Media</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({ colunas: state.colunas })
const mapDispatchToProps = dispatch => ({addMedia: media => dispatch(addMedia(media)) })

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)