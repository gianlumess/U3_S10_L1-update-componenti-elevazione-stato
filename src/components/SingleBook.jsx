import { Component } from "react";
import { Badge, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  changeCurrentState = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card
        className={this.state.selected ? "border border-3 border-danger" : "border border-3 border-dark"}
        onClick={() => {
          this.props.changeAsin(this.props.book.asin);
          this.changeCurrentState();
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="text-end">
            <u>Price:</u> <Badge>{this.props.book.price}€</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
