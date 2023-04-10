import Form from "react-bootstrap/Form";
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

  useEffect(() => {
    searchMember({ name: searchData.query }).then((data) =>
      setSearchData({ ...searchData, result: data.members })
    );
  }, [searchData.query]);

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchData({ ...searchData, query: searchData.input });
        }}
      >
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Enter your search query"
              value={searchData.input}
              onChange={(e) =>
                setSearchData({ ...searchData, input: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Go</Button>
        </fieldset>
      </Form>
      {console.log(searchData)}
    </>
  );
}

export default Search;
