import { useState } from "react"
import EditBook from "./EditBook";
import useBooksContext from "../hooks/use-books-context";

function ShowBooks({book}){
    const [edit, setEdit] = useState(false);
    const {deleteBookById} = useBooksContext()

    const handleDelete =()=>{
        deleteBookById(book.id)
    }

    const handleEdit = ()=>{
        setEdit(!edit)
    }

    const handleSubmit = ()=>{
        setEdit(!edit)
    }
    
    
    let content = book.title
    if(edit){
        content = <EditBook book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/id/${book.id}/200/150`} alt="" />
            <div className="actions">
                 <button className="edit" onClick={handleEdit}>edit</button>
                 <button className="delete" onClick={handleDelete}>X</button>
            </div>
            <h1>{content}</h1>
        </div>
    )

}

export default ShowBooks