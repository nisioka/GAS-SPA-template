import BodyCard from "./BodyCard.tsx";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

const gasUrl = "https://script.google.com/macros/s/AKfycbwp2IhlPyhdy_HYVnHWHMgZ5hn7xaPtOxx0bDPe87E/exec"

type Content = {
  id: number,
  title: string,
  text: string

}
export default function Content() {
  const [content, setContent] = useState([] as Content[]);
  useEffect(() => {
    axios.post(gasUrl, {name: "getList"})
         .then(response => setContent(response.data as Content[]));
    // fetch(gasUrl,
    //     {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify({name: "getList"})})
    //     .then(response => response.json() as Promise<Content[]>)
    //     .then(data => setContent(data));
  });
  function getCardContent(object: Content) {
    return (
        <Grid item xs={12} sm={4} key={object.id}>
          <BodyCard title={object.title} text={object.text} />
        </Grid>
    );
  }
  return (
      <Grid container spacing={2}>
        {content.map(c => getCardContent(c))}
      </Grid>
  );
}