import { Badge, ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item className="d-flex justify-content-between align-items-center">
    {props.recensione}
    <Badge>{props.voto}</Badge>
  </ListGroup.Item>
);

export default SingleComment;
