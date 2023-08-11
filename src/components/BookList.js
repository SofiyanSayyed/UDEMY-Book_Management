import ShowBooks from "./ShowBooks"
import {useContext} from 'react';
import BooksContext from '../context/books'

function BookList({onEdit, books, onDelete}){
    const {count, increamentCount} = useContext(BooksContext)

    const renderedBooks = books.map((book) =>{
        return <ShowBooks onEdit={onEdit} onDelete={onDelete} book={book} key={book.id} />
    })

    return (
        <div className="book-list">
            {count}
            <button onClick={increamentCount}>Click</button>
            {renderedBooks}
        </div>
    )

}

export default BookList