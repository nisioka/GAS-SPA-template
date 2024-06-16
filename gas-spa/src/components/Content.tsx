import BodyCard from "./BodyCard.tsx";
import {Grid} from "@mui/material";

export default function Content() {
  return (
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <BodyCard title={"title1"} text={"text1"}/>
        </Grid>
        <Grid item sm={3}>
          <BodyCard title={"title2"} text={"text2"}/>
        </Grid>
      </Grid>
  );
}