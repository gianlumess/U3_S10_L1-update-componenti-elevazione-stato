import { Component } from "react";
import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    reviews: [],
  };

  fetchReviews = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmZmNDdjMjM5YzAwMTUyZjRiNzQiLCJpYXQiOjE3MTgzNTM5MDgsImV4cCI6MTcxOTU2MzUwOH0.YxOTllrumawWZJ4LtdXWOHBZKu9J2pg4-y4aQ09JeiQ",
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

  componentDidMount() {
    this.fetchReviews();
  }
  render() {
    return (
      <div>
        <h4>Commenti</h4>
        {this.state.reviews.length > 0 ? (
          <CommentList reviews={this.state.reviews} />
        ) : (
          <Alert bg="info">Non ci sono ancora commenti</Alert>
        )}
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}
export default CommentArea;
