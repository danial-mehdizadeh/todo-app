import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { getTask, updateTask } from "../api/taskApi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditTask = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    completed: true,
    user: localStorage.getItem("user") || "guest",
  });

  useEffect(() => {
    getTask(id).then((data) => {
      const { name, byUser: user, completed } = data.task;
      setFormData({
        name,
        user,
        completed,
      });
      console.log(formData);
    });
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask(id, formData);
    console.log(formData);
    // setFormData({
    //   name: "",
    //   completed: false,
    //   user: localStorage.getItem("user") || "guest",
    // });
    navigate("/");
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Title"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="user">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                disabled
                value={formData.user}
                onChange={(e) =>
                  setFormData({ ...formData, user: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="done">
              <Form.Label>Done</Form.Label>
              <Form.Check
                // disabled
                // label="disabled switch"
                // id="disabled-custom-switch"
                checkedDefault={formData.completed}
                onChange={(e) => {
                  const value = e.target.checked;
                  setFormData({ ...formData, completed: value });
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default EditTask;
