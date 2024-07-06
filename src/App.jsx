import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasy from "../src/books/fantasy.json";
import BookList from "./components/BookList";
import ChangeCategory from "./components/ChangeCategory";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState(fantasy);
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <ChangeCategory setCategory={setCategory} />
        <BookList category={category} />
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
