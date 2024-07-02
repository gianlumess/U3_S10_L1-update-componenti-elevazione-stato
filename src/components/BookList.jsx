import { Component } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: "",
  };

  changeAsin = (newAsin) => {
    this.setState({ selectedAsin: newAsin });
  };

  render() {
    return (
      <>
        <FormControl
          className="mb-3"
          type="text"
          placeholder="Cerca un libro"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <Row>
          <Col xs={8}>
            <Row className="g-3">
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map((book) => (
                  <Col xs={6} md={3} key={book.asin}>
                    <SingleBook book={book} changeAsin={this.changeAsin} selectedAsin={this.state.selectedAsin} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
