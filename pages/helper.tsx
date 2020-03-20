import { Container } from "@material-ui/core";

function Helper() {
  return <Container>helper dashboard</Container>;
}

export async function getStaticProps() {
  const props = {};
  return { props };
}

export default Helper;
