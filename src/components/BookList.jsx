import { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ category }) => {
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
        className="mb-5"
        type="text"
        placeholder="Cerca un libro"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-3">
            {category
              .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((book) => (
                <Col xs={12} md={4} lg={3} key={book.asin}>
                  <SingleBook book={book} changeAsin={changeAsin} selectedAsin={selectedAsin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col className="d-none d-md-block">
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
