import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasy from "../src/books/fantasy.json";
import history from "../src/books/history.json";
import horror from "../src/books/horror.json";
import romance from "../src/books/romance.json";
import scifi from "../src/books/scifi.json";
import BookList from "./components/BookList";
import ChangeCategory from "./components/ChangeCategory";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <ChangeCategory />
        <BookList books={horror} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
