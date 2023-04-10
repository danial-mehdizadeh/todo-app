import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Search from "./Search";
import { createMember } from "../api/membersApi";
import { useState, useEffect } from "react";
const MembersCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    github: "",
    linkedin: "",
    lagnuage: "",
    skill: "",
    admin: false,
    skills: [],
  });

  const handleSubmit = async () => {
    console.log(formData);
    // await createCourseApi(formData);

    setFormData({
      ...formData,
      name: "",
      age: "",
      github: "",
      linkedin: "",
      lagnuage: "",
      admin: false,
      skill: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Create Member</h1>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Title"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="github">
            <Form.Label>Github id:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Github id"
              value={formData.github}
              onChange={(e) =>
                setFormData({ ...formData, github: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="linkedin">
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Linkedin username"
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="admin">
            <Form.Label>Admin</Form.Label>
            <Form.Check
              // disabled
              // label="disabled switch"
              // id="disabled-custom-switch"
              checkedDefault={formData.admin}
              onChange={(e) => {
                const value = e.target.checked;
                setFormData({ ...formData, admin: value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="skills">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Linkedin username"
              value={formData.skill}
              onChange={(e) => {
                e.preventDefault();

                setFormData({ ...formData, skill: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setFormData({
                    ...formData,
                    skill: "",
                    skills: [...formData.skills, formData.skill],
                  });
                }
              }}
            />
          </Form.Group>
          <div className="m-2">
            {formData?.skills?.map((elem, index) => {
              return (
                <Button variant="info" key={elem + index}>
                  {elem}
                </Button>
              );
            })}
          </div>
          <Button
            variant="primary"
            onClick={(e) => {
              console.log(formData);
              createMember(formData);
              setFormData({
                ...formData,
                name: "",
                age: "",
                github: "",
                linkedin: "",
                lagnuage: "",
                skill: "",
                admin: false,
                skills: [],
              });
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default MembersCreate;
