import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter ((book) =>{
        return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  const updateBookById = (id,title) => {
    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        return {...book,title};
      }
      return book;

    });
    setBooks(updatedBooks);
  }

  const createBook = (title) => {
    const updatedBooks = [...books, { id:Math.round(Math.random()*999) , title }];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList onDelete={deleteBookById} books={books} onEdit={updateBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
