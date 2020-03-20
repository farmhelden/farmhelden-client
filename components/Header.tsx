import Link from "next/link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2)
    },
    title: {
      display: "inline-block"
    },
    viewButton: {
      padding: theme.spacing(2)
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Farmhelden.de</h1>
      <Link href="/helper">
        <Button variant="outlined" color="primary">
          <a>Ansicht wechseln</a>
        </Button>
      </Link>
    </div>
  );
};

export default Header;
