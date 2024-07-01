import { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        className={this.state.selected ? "border border-3 border-danger" : "border border-3 border-dark"}
        onClick={() => this.handleToggle()}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-end">
            <u>Price:</u> <Badge>{book.price}€</Badge>
          </Card.Text>
        </Card.Body>
        {this.state.selected && <CommentArea asin={book.asin} />}
      </Card>
    );
  }
}

export default SingleBook;
