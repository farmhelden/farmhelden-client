import { useMemo } from "react";
import { NextPageContext } from "next";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Table } from "../components/Table";

import Header from "../components/Header";
import Root from "../components/Root";

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

function useFarmTableColumns() {
  return useMemo(
    () => [
      {
        Header: "Ernteart",
        accessor: "title"
      },
      {
        Header: "Standort",
        accessor: "location"
      },
      {
        Header: "Benötigte Helfer",
        accessor: "neededHelpers"
      },
      {
        Header: "Aktion"
      }
    ],
    []
  );
}

function Helper({ data }: any) {
  const classes = useStyles();
  const columns = useFarmTableColumns();

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
        <Table columns={columns} data={data} block />
      </Container>
    </Root>
  );
}

export async function getStaticProps(ctx: NextPageContext) {
  return { props: { data } };
}

export default Helper;
