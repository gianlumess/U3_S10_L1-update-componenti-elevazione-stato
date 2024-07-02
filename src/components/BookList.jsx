import { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  /*  state = {
    searchQuery: "",
    selectedAsin: "",
  }; */

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState("");

  const changeAsin = (newAsin) => {
    setSelectedAsin(newAsin);
  };

  return (
    <>
      <FormControl
        className="mb-3"
        type="text"
        placeholder="Cerca un libro"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row>
        <Col xs={8}>
          <Row className="g-3">
            {props.books
              .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((book) => (
                <Col xs={6} md={3} key={book.asin}>
                  <SingleBook book={book} changeAsin={changeAsin} selectedAsin={selectedAsin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
