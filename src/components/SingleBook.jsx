import { Component } from "react";
import { Badge, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  changeState = () => {
    this.props.handleToggle();
  };

  changeStateSingleBook = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        className={this.state.selected ? "border border-3 border-danger" : "border border-3 border-dark"}
        onClick={() => {
          this.changeState();
          this.changeStateSingleBook();
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-end">
            <u>Price:</u> <Badge>{book.price}€</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
