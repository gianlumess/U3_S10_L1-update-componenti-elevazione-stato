import { Component } from "react";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

class ChangeCategory extends Component {
  state = {
    category: fantasy,
  };
  render() {
    return (
      <ToggleButtonGroup className="mt-3 mb-4" type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1} onClick={() => this.setState({ category: fantasy })}>
          Fantasy
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} onClick={() => this.setState({ category: history })}>
          History
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} onClick={() => this.setState({ category: horror })}>
          Horror
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" value={4} onClick={() => this.setState({ category: romance })}>
          Romance
        </ToggleButton>
        <ToggleButton id="tbg-radio-5" value={5} onClick={() => this.setState({ category: scifi })}>
          Scifi
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default ChangeCategory;
