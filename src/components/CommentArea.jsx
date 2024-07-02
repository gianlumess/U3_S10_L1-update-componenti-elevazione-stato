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

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      console.log("asin diverso,avvio fetch");
      this.fetchReviews();
    }
  }

  render() {
    return (
      <div className="sticky-top">
        <h4>Commenti</h4>

        <AddComment asin={this.props.asin} />
        {this.props.asin === "" ? (
          <Alert>Seleziona un libro per vedere le recensioni</Alert>
        ) : (
          <CommentList reviews={this.state.reviews} />
        )}
      </div>
    );
  }
}
export default CommentArea;
