import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { searchMember } from "../api/membersApi";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    query: "",
    input: "",
    result: [],
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    searchMember({ name: searchData.query }).then((data) => {
      setSearchData({
        ...searchData,
        result: [data.members] !== undefined ? data.members : [],
      });
      console.log(searchData);
    });
  }, [searchData.query]);

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchData({ ...searchData, query: searchData.input });

          handleShow();
        }}
      >
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Enter your search query"
              value={searchData.input}
              onChange={(e) => {
                setSearchData({ ...searchData, input: e.target.value });
              }}
            />
          </Form.Group>
          <Button type="submit">Go</Button>
        </fieldset>
      </Form>

      {console.log(searchData)}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {searchData.result &&
              searchData.result.map((item, index) => (
                <div
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
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default Search;
