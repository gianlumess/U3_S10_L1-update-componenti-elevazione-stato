import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.reviews.map((review) => (
        <SingleComment key={review._id} recensione={review} />
      ))}
    </ListGroup>
  );
};

export default CommentList;