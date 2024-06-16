import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader, IconButton} from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

type BodyCardProps = {
  title: string,
  text: string
}

export default function BodyCard(props: BodyCardProps) {
  const { title, text } = props;
  return (
      <Box sx={{minWidth: 275}}>
        <Card variant="outlined">
          <CardHeader
              action={
                <IconButton aria-label="settings">
                  <StarOutlineIcon/>
                </IconButton>
              }
              title={title}
          />
          <CardContent>
            <Typography variant="body2">
              {text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">詳細を見る</Button>
          </CardActions></Card>
      </Box>
  );
}
