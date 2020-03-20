import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TableHead, { TableHeadProps } from "@material-ui/core/TableHead";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 600,
      background: theme.palette.grey[100]
    }
  })
);

const StyledTableHead = (props: TableHeadProps) => {
  const classes = useStyles();

  return <TableHead className={classes.root} {...props} />;
};

export default StyledTableHead;
