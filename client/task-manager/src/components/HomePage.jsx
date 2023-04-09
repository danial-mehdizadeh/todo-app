import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../api/taskApi";
const HomePage = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    getAllTasks({ byUser: "guest" }).then((data) => setTaskData(data.tasks));
  }, []);
  return (
    <Container>
      <Row>
        <Col>{console.log(taskData)}</Col>
      </Row>
      <Row>
        <Link to="new">
          <Button
            variant="primary"
            className="button-x"
            onClick={() => {
              preventDefault();
            }}
          >
            Add new task
          </Button>
        </Link>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          {taskData?.map((elem) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      <h3>{elem.name}</h3>
                      <Button
                        className="button-x"
                        variant="danger"
                        onClick={() => {
                          preventDefault();
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        className="button-x"
                        variant="primary"
                        onClick={() => {
                          preventDefault();
                        }}
                      >
                        Edit
                      </Button>
                      {elem.completed && (
                        <Button
                          className="button-x"
                          variant="success"
                          onClick={() => {
                            preventDefault();
                          }}
                        >
                          Completed
                        </Button>
                      )}
                      {elem.completed === false && (
                        <Button
                          className="button-x"
                          variant="danger"
                          onClick={() => {
                            preventDefault();
                          }}
                        >
                          Pending
                        </Button>
                      )}
                    </td>
                    <td>{elem?.user?.name}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        <p>{taskData.length} task total.</p>
      </Row>
    </Container>
  );
};
export default HomePage;
