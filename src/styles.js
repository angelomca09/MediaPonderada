import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBarSpace: theme.mixins.toolbar,
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeightPaper: {
    height: "85vh",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  timePaper: {
    height: "15vh",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  formPaper: {
    height: "85vh",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  tempo: {
    paddingTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  addButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: "50%",
    borderColor: "#2287C9",
    background: "#2287C9",
    fontWeight: "bold",
    color: "white",
    width: "50px",
    height: "50px",
  },
  cancelButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: "50%",
    borderColor: "#777",
    background: "#777",
    fontWeight: "bold",
    color: "white",
    width: "50px",
    height: "50px",
  },
  textFields: {
    marginBottom: theme.spacing(2),
  },
  header: {
    background:
      "linear-gradient(to bottom, #6377e8 0%, #3f51b5 66%, #182c9c 100%)",
    color: "whitesmoke",
  },
  toolbar:{
    display: "flex",
    justifyContent: "space-between"
  },
  exportButton: {
  },
}));

export default useStyles;
