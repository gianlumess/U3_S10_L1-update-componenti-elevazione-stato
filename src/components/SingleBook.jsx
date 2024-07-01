import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card style={{ border: this.state.selected ? "3px solid red" : "3px solid #ebebeb" }}>
        <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
