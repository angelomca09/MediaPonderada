import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyles from '../styles';
import { connect } from "react-redux";
import { deleteMedia, editMedia, setMedia, setMediaIndex } from "../redux/actions"

const MediaCard = (props) => {

    const classes = useStyles();

    const colunas = props.colunas
    const linhas = props.linhas
    const objetivo = props.objetivo

    const zerarValoresDaMedia = () => {
        return { id: "", valores: colunas.map(() => 0) }
    }

    const editarClick = (index, linha) => {
        props.setMediaIndex(index)
        props.setMedia(linha)
    }

    const deletarClick = (index) => {
        props.setMedia(zerarValoresDaMedia())
        props.setMediaIndex(null)
        props.deleteMedia(index)
    }

    const total = (valores) => {
        return valores.reduce((soma, valor, index) => (colunas[index] ? (soma + (valor * colunas[index].peso)) : soma), 0).toFixed(2)
    }

    const melhorValor = (total, valor, peso) => {
        return Math.abs((objetivo - (total - (valor * peso))) / peso)
    }

    const formula = (colunas, valores) => {
        return colunas.map((coluna, index) => `${coluna.peso} . ${valores[index]} `).join("+ ").concat(` = ${total(valores)}`)
    }

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <table className="mediaTable">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            {colunas.map((coluna, index) => <th key={index} title={`Peso: ${coluna.peso}`}>{coluna.tag}</th>)}
                            <th>Total</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {linhas.map((linha, index) => (
                            <tr key={index}>
                                <td>{linha.id}</td>
                                {linha.valores.map((valor, valorIndex) =>
                                    (colunas[valorIndex]
                                        ? <td key={valorIndex} title={`${colunas[valorIndex].tag} para objetivo -> ${melhorValor(total(linha.valores), valor, colunas[valorIndex].peso)}`}  >
                                            {valor}
                                        </td>
                                        : null
                                    )
                                )}

                                <td title={`${formula(colunas, linha.valores)}`} style={{ color: (total(linha.valores) >= objetivo) ? "green" : "red" }} >
                                    {total(linha.valores)}
                                </td>
                                <td><button style={{ width: "100%" }} onClick={() => editarClick(index, linha)}>E</button></td>
                                <td><button style={{ width: "100%" }} onClick={() => deletarClick(index)}>R</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Paper>
        </Grid >
    )
}

const mapStateToProps = state => ({
    colunas: state.colunas,
    linhas: state.linhas,
    objetivo: state.objetivo
})

const mapDispatchToProps = dispatch => ({
    deleteMedia: id => dispatch(deleteMedia(id)),
    editMedia: (id, media) => dispatch(editMedia({ id, media })),
    setMedia: media => dispatch(setMedia(media)),
    setMediaIndex: index => dispatch(setMediaIndex(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)