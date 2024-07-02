import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.reviews.map((review) => (
        <SingleComment key={review._id} recensione={review.comment} voto={review.rate} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
