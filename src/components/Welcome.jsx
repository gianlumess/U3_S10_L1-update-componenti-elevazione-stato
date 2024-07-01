import { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Welcome extends Component {
  render() {
    return (
      <Alert className="mt-4 text-center display-5">
        think of a book...<strong>find it!</strong>
      </Alert>
    );
  }
}

export default Welcome;
