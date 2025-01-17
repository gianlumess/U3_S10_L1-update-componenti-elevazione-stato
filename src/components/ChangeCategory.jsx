import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const ChangeCategory = ({ setCategory }) => {
  /*  state = {
    category: fantasy,
  }; */
  return (
    <ToggleButtonGroup className="mt-3 mb-4" type="radio" name="options" defaultValue={1}>
      <ToggleButton id="tbg-radio-1" value={1} onClick={() => setCategory(fantasy)}>
        Fantasy
      </ToggleButton>
      <ToggleButton id="tbg-radio-2" value={2} onClick={() => setCategory(history)}>
        History
      </ToggleButton>
      <ToggleButton id="tbg-radio-3" value={3} onClick={() => setCategory(horror)}>
        Horror
      </ToggleButton>
      <ToggleButton id="tbg-radio-4" value={4} onClick={() => setCategory(romance)}>
        Romance
      </ToggleButton>
      <ToggleButton id="tbg-radio-5" value={5} onClick={() => setCategory(scifi)}>
        Scifi
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ChangeCategory;
