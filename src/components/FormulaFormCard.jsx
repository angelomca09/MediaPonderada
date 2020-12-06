import React from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { setFormulas, setMedias, setObjetivo, save } from "../redux/actions"

const FormulaCard = (props) => {

    const classes = useStyles();

    const colunas = props.colunas
    const medias = props.medias

    const alteraValores = (event, index, campo) => {
        var valoresCopia = [...colunas];
        valoresCopia[index][campo] = campo === "peso" ? +event.target.value : event.target.value;
        props.setFormulas(valoresCopia)
        props.save()
    }

    const corrigeMedias = (index = null) => {
        var start = colunas.length
        var mediasCopia = Object.assign([], medias);
        if (index !== null)
            mediasCopia.forEach(media => media.valores.splice(index, 1))
        else
            mediasCopia.forEach(media => media.valores.splice(start, 0, 0))
        props.setMedias(mediasCopia)
    }

    const add = () => {
        var valoresCopia = [...colunas];
        props.setFormulas(valoresCopia.concat({ tag: "TAG", peso: 0 }))
        corrigeMedias()
        props.save()
    }
    
    const remove = (index) => {
        corrigeMedias(index)
        var colunasCopia = [...colunas];
        colunasCopia.splice(index, 1)
        props.setFormulas(colunasCopia)
        props.save()
    }

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <table className="formTable">
                    <thead><tr><th></th><th >Fórmula</th><th></th><th></th><th></th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Objetivo</td>
                            <td><Input value={props.objetivo} onChange={(event) => props.setObjetivo(+event.target.value)} /></td>
                        </tr>
                        {colunas.map((coluna, index) =>
                            <tr key={index}>
                                <td>Tag</td>
                                <td><Input value={coluna.tag} onChange={(event) => alteraValores(event, index, "tag")} /></td>
                                <td>Peso</td>
                                <td><Input type={"number"} value={coluna.peso} onChange={(event) => alteraValores(event, index, "peso")} /></td>
                                <td><button onClick={() => remove(index)}>X</button></td>
                            </tr>)}
                        <tr>
                            <td></td>
                            <td><button onClick={add}>Adicionar campo</button></td>
                        </tr>
                    </tbody>
                </table>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({
    colunas: state.colunas,
    medias: state.linhas,
    objetivo: state.objetivo
})

const mapDispatchToProps = dispatch => ({
    setFormulas: formulas => dispatch(setFormulas(formulas)),
    setMedias: medias => dispatch(setMedias(medias)),
    setObjetivo: objetivo => dispatch(setObjetivo(objetivo)),
    save: () => dispatch(save())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormulaCard)