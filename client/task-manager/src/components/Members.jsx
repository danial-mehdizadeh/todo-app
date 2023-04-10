import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Search from "./Search";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMembers } from "../api/membersApi";
import { useNavigate } from "react-router-dom";
import { Lamp } from "react-bootstrap-icons";

const Members = () => {
  const navigate = useNavigate();
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    getAllMembers().then((data) => setMemberData(data.members));
  }, []);

  return (
    <Container>
      <Search />
      <h1>Members</h1>

      <Row>
        <Link to="/create-member">Create member</Link>
        {memberData?.map((item, index) => (
          <Col
            md={6}
            key={index}
            style={{
              heigth: "50rem",
              padding: "3px",
            }}
          >
            {console.log(item)}
            <Card>
              <Card.Body>
                {item?.name && <Card.Title>{item.name}</Card.Title>}
                {item?.age && <Card.Text>{item.age}</Card.Text>}
                {item?.github && <Card.Text>{item.github}</Card.Text>}
                {item?.tasks?.map((elem) => {
                  return <span>Task-id: {elem}, </span>;
                })}
                {item?.tasks.length > 2 && (
                  <>
                    <Card.Text>
                      <Lamp />
                    </Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Members;
