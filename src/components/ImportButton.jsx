import React from 'react';
import useStyles from '../styles';
import { connect } from "react-redux";
import { setMedias, setFormulas, setObjetivo } from "../redux/actions"

const ImportButton = (props) => {

    const classes = useStyles();

    const submit = (event) => {
        event.preventDefault();

        function onChange(event) {
            var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
        }

        function onReaderLoad(event) {
            var obj = JSON.parse(event.target.result);
            props.setMedias(obj.linhas)
            props.setFormulas(obj.colunas)
            props.setObjetivo(obj.objetivo)
            input.remove();
        }

        const input = document.createElement('input');
        input.setAttribute("type", "file");
        input.addEventListener("change", onChange)
        input.click();
    }

    return (
        <button className={classes.importButton} onClick={submit}>Importar</button>
    )
}

const mapDispatchToProps = dispatch => ({
    setMedias: medias => dispatch(setMedias(medias)),
    setFormulas: formulas => dispatch(setFormulas(formulas)),
    setObjetivo: objetivo => dispatch(setObjetivo(objetivo)),
})

export default connect(null, mapDispatchToProps)(ImportButton)