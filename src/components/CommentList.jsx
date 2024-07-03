import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ reviews, isLoading }) => {
  return (
    <ListGroup>
      {reviews.map((review) => (
        <SingleComment key={review._id} recensione={review.comment} voto={review.rate} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
