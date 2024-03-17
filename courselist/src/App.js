import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect} from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
  //   [
  //   { id: 1`, checked: true, item: "Practice Coding" },
  //   { id: 2, checked: false, item: "Play Cricket" },
  //   { id: 3, checked: false, item: "React about AI" },
  // ]
  []
  );

  const [newItem,setNewItem] = useState("");
  const [search,setSearch] = useState("");

  // console.log("before useEffect")

  useEffect(() => {
    // console.log("inside")
    JSON.parse(localStorage.getItem("todo_list"))
    
  },[])
  
  // console.log("after useEffect")

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
      <Header title={"Course List"}/>
      <AddItem
        newItem = {newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
