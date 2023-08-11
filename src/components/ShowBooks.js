import { useState } from "react"
import EditBook from "./EditBook";

function ShowBooks({onEdit, onDelete, book}){
    const [edit, setEdit] = useState(false);

    const handleDelete =()=>{
        onDelete(book.id)
    }

    const handleEdit = ()=>{
        setEdit(!edit)
    }

    const handleSubmit = (id, newTitle)=>{
        onEdit(id, newTitle)
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