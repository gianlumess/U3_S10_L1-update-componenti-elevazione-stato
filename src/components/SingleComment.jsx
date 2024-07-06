import { Badge, ListGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const SingleComment = (props) => {
  const fetchToDeleteComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.idCommento, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {props.recensione}

      <div>
        <Badge>{props.voto}</Badge>
        <button className="btn btn-danger ms-5" onClick={fetchToDeleteComment}>
          <Trash fill="currentColor" />
        </button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
