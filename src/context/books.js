import { createContext, useState} from 'react'
import axios from "axios";


const BooksContext = createContext()
function Provider({children}) {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        let response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }


    const createBook = async (title) => {
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

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBook,
        deleteBookById
    }
   
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;