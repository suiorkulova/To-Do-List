import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [img, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const savedTodo = localStorage.getItem('todo');
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  function addTodo() {
    let obj = {
      id: Date.now(),
      image: img,
      name: name,
      price: price,
    };
    setTodo([...todo, obj]);
  }

  function deleteTodo(id) {
    setTodo(todo.filter((el) => el.id !== id));
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <Admin
              setImage={setImage}
              setName={setName}
              setPrice={setPrice}
              addTodo={addTodo}
            />
          }
        />
        <Route path="/menu" element={<Menu todo={todo} deleteTodo={deleteTodo} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
