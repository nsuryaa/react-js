import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
  //   [
  //   { id: 1, checked: true, item: "Practice Coding" },
  //   { id: 2, checked: false, item: "Play Cricket" },
  //   { id: 3, checked: false, item: "React about AI" },
  // ]
  JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem,setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id,checked:false,item}
    const listItems = [...items,addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('submitted');
    if(!newItem) return;
    console.log(newItem);
    //add
    addItem(newItem);
    setNewItem("");
  }
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem = {newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
