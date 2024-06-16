import BodyCard from "./BodyCard.tsx";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";

type Content = {
  id: number,
  title: string,
  text: string

}
export default function Content() {
  const [content, setContent] = useState([] as Content[]);
  useEffect(() => {
    fetch("/getList", {method: "POST", headers: {"Content-Type": "application/json"}})
        .then(response => response.json() as Promise<Content[]>)
        .then(data => setContent(data));
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