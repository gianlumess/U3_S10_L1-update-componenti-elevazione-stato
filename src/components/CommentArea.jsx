import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  /*  state = {
    reviews: [],
  }; */

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReviews = () => {
    setIsLoading(true);
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
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
        setReviews(review);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchReviews();
  }, [props.asin]);

  return (
    <div className="sticky-top">
      <h4>Commenti</h4>

      <AddComment asin={props.asin} />
      {props.asin === "" ? (
        <Alert>Seleziona un libro per vedere le recensioni</Alert>
      ) : (
        <CommentList reviews={reviews} isLoading={isLoading} />
      )}
    </div>
  );
};
export default CommentArea;
