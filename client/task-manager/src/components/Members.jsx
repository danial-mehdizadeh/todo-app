import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./Search";
const Members = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Search />
          <h1>Members</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Members;
