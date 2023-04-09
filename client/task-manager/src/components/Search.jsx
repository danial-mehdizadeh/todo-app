import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Enter your search query" />
          </Form.Group>
          <Button type="submit">Go</Button>
        </fieldset>
      </Form>
    </>
  );
}

export default Search;
