import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core'
import MainScreen from "./screens/Main";
import useStyles from "./styles"

export default props => {

  const classes = useStyles()

  return (
    <div style={{ display: "flex" }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography style={{ fontWeight: "bold" }}>Média Ponderada</Typography>
        </Toolbar>
      </AppBar>
      <main style={{ flexGrow: 1, height: '100vh', overflow: 'auto', background:"#eeeeee" }}>
        <div className={classes.appBarSpace} ></div>
        <Container maxWidth="xl" className={classes.container} spacing={3}>
          <MainScreen/>
        </Container>
      </main>
    </div>
  )

}