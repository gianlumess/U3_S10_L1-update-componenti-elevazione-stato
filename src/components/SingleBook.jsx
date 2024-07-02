import { Badge, Card } from "react-bootstrap";

const SingleBook = (props) => {
  /*  state = {
    selected: false,
  }; */

  return (
    <Card
      className={
        props.selectedAsin === props.book.asin ? "border border-3 border-danger" : "border border-3 border-dark"
      }
      onClick={() => {
        props.changeAsin(props.book.asin);
      }}
    >
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text className="text-end">
          <u>Price:</u> <Badge>{props.book.price}€</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
