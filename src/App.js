import { useState, useEffect} from "react"
import CreateBook from "./components/CreateBook"
import BookList from "./components/BookList"
import './index.css'
import useBooksContext from "./hooks/use-books-context"

function App(){
    
    const {fetchBooks} = useBooksContext()

    useEffect(()=>{
        fetchBooks()
    },[])

    return (
        <div>
            <CreateBook/>
            <BookList/>
        </div>
    )

}

export default App