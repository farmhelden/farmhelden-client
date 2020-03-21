import { NextPageContext } from "next";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Header from "../components/Header";
import { StyledTableHead } from "../components/Table";
import Root from "../components/Root";
import CustomizedDialogs from "../components/Dialogue/Dialogue";

function createData(title: string, location: string, neededHelpers: number) {
  return { title, location, neededHelpers };
}

const data = [
  createData("Frozen yoghurt", "Frankfurt am Main", 12),
  createData("Ice cream sandwich", "Frankfurt am Main", 14),
  createData("Eclair", "Frankfurt am Main", 8),
  createData("Cupcake", "Frankfurt am Main", 12),
  createData("Gingerbread", "Frankfurt am Main", 6)
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginBottom: theme.spacing(2)
    },
    gridSubmitButton: {
      display: "flex",
      alignItems: "flex-end"
    }
  })
);

function Helper({ data }: any) {
  const classes = useStyles();

  return (
    <Root>
      <Container>
        <Header />
        {/* Form */}
        <form
          noValidate
          autoComplete="off"
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField id="location" label="Standort" fullWidth />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <InputLabel id="radius-label">Radius</InputLabel>
                <Select labelId="radius-label" id="radius">
                  <MenuItem value={10}>10 km</MenuItem>
                  <MenuItem value={20}>20 km</MenuItem>
                  <MenuItem value={30}>30 km</MenuItem>
                  <MenuItem value={40}>40 km</MenuItem>
                  <MenuItem value={50}>50 km</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.gridSubmitButton}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Filtern
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table aria-label="Derzeitige Ernten" size="small">
            <StyledTableHead>
              <TableRow>
                <TableCell>Ernteart</TableCell>
                <TableCell>Standort</TableCell>
                <TableCell>Benötigte Helfer</TableCell>
                <TableCell>Aktion</TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.neededHelpers}</TableCell>
                  <TableCell>
                    <CustomizedDialogs title={"Das ist der Titel"} description={"Das ist die Beschreibung"}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Root>
  );
}

export async function getStaticProps(ctx: NextPageContext) {
  return { props: { data } };
}

export default Helper;
