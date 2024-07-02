import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento delle recensioni");
        }
      })
      .then((review) => {
        this.setState({ reviews: review });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un commento"
            value={this.state.newComment.comment}
            onChange={(e) => {
              this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } });
            }}
            required
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={this.state.newComment.rate}
          onChange={(e) => {
            this.setState({
              newComment: { ...this.state.newComment, rate: e.target.value, elementId: this.props.asin },
            });
          }}
          required
        >
          <option>Inserisci un voto</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button type="submit" variant="primary">
          Invia commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
