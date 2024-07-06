import { Badge, Card } from "react-bootstrap";

const SingleBook = (props) => {
  /*  state = {
    selected: false,
  }; */
  //funzione che spezza il testo se troppo lungo
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <Card
      className={
        props.selectedAsin === props.book.asin ? "border border-3 border-danger" : "border border-3 border-dark"
      }
      onClick={() => {
        props.changeAsin(props.book.asin);
      }}
    >
      <Card.Img variant="top" src={props.book.img} className="img-card" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{truncateString(props.book.title, 45)}</Card.Title>
        <Card.Text className="text-end ">
          <u>Price:</u> <Badge>{props.book.price}€</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
