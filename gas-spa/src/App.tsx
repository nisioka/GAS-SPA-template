import './App.css';
import Content from "./components/Content.tsx";
import {Grid} from "@mui/material";
import Header from "./components/Header.tsx";

function App() {
  return (
      <Grid container direction="column" spacing={1} >
        <Grid item sm={12}>
          <Header/>
        </Grid>
        <Grid item container>
          <Grid xs={12} sm={12}>
            <Content/>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default App;
