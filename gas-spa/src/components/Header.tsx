import {AppBar, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography className={useStyles().typographyStyles}>ヘッダー</Typography>
          <SearchIcon/>
        </Toolbar>
      </AppBar>
  )
}
