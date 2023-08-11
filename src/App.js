import { useState, useEffect } from "react"
import CreateBook from "./components/CreateBook"
import BookList from "./components/BookList"
import axios from "axios";
import './index.css'

function App(){
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        let response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBooks()
    },[])


    const createBooks = async (title) => {
        let response = await axios.post('http://localhost:3001/books',{
            title
        })
        

        const updatedBooks = {...response.data}
        setBooks([...books, updatedBooks])
    }

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`)
        .then(()=> console.log('.then'))
        .catch((err)=> console.log(err.message|| err))

        const updatedBooks = books.filter((book) => {
           return book.id !== id;   
        });
        setBooks(updatedBooks)  ;
    }

    const editBook = async (id, newTitle) => {

        let response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle,
        });
        const updatedBooks = books.map((book) => {
            if(id === book.id){
                return {...book,...response.data}
            }
            return book
        })

        setBooks(updatedBooks)
    }

    return (
        <div>
            <CreateBook onCreate={createBooks}/>
            <BookList onEdit= {editBook} onDelete={deleteBookById} books={books}/>
        </div>
    )

}

export default App