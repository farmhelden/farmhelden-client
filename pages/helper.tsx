import { useMemo } from "react";
import { NextPageContext } from "next";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Table } from "../components/Table";

import Header from "../components/Header";
import Root from "../components/Root";
import { Formik, FormikProps, Form } from "formik";
import { PrimaryButton } from "../components/Button";
import { InputField } from "../components/Form";

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

const initialValues = {
  location: "",
  radius: null as number | null
};

function Helper({ data }: any) {
  const columns = useFarmTableColumns();

  return (
    <Root>
      <Container>
        <Header />
        {/* Form */}

        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            window.alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }: FormikProps<typeof initialValues>) => {
            return (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5}>
                    <InputField
                      name="location"
                      placeholder="Frankfurt am Main"
                      block
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <InputField name="radius" placeholder="30 km" block />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <PrimaryButton type="submit" block>
                      Filtern
                    </PrimaryButton>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>

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
