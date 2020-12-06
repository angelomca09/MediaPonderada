import React from 'react';
import useStyles from '../styles';
import { connect } from "react-redux";

const ExportButton = (props) => {

    const classes = useStyles();

    const colunas = props.colunas;
    const linhas = props.linhas;
    const objetivo = props.objetivo;

    const submit = (event) => {
        event.preventDefault();
        const data = { colunas, linhas, objetivo }

        const link = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        const element = document.createElement('a');
        element.setAttribute("href", link);
        element.setAttribute("download", "data_media.json");
        document.body.appendChild(element);
        element.click();
        element.remove();
    }

    return (
        <button className={classes.exportButton} onClick={submit}>Exportar</button>
    )
}

const mapStateToProps = state => ({
    colunas: state.colunas,
    linhas: state.linhas,
    objetivo: state.objetivo,
})

export default connect(mapStateToProps)(ExportButton)