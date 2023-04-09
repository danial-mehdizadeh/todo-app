import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table, Button } from "react-bootstrap";
import { getHistory } from "../api/historyApi";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    getHistory().then((data) => setHistoryData(data.modifHistory));
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {console.log(historyData)}
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              {historyData?.map((data) => {
                return (
                  <tr>
                    <td>
                      <h3>{data._id}</h3>
                      <p>
                        typeOfAction: {data.typeOfAction}, by user:{" "}
                        {data.byUser}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default History;
