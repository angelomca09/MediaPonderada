import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core'
import MainScreen from "./screens/Main";
import useStyles from "./styles"
import ExportButton from './components/ExportButton';

export default props => {

  const classes = useStyles()

  return (
    <div style={{ display: "flex" }}>
      <AppBar position="absolute" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography style={{ fontWeight: "bold" }}>Cálculo da Média</Typography>
          <div>
            <ExportButton />
          </div>
        </Toolbar>
      </AppBar>
      <main style={{ flexGrow: 1, height: '100vh', overflow: 'auto', background: "#eeeeee" }}>
        <div className={classes.appBarSpace} ></div>
        <Container maxWidth="xl" className={classes.container} spacing={3}>
          <MainScreen />
        </Container>
      </main>
    </div>
  )

}