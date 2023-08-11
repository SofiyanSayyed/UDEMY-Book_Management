import { useState } from "react"

function EditBook({book, onSubmit}){
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleClick =(event) => {
        event.preventDefault()
        onSubmit(book.id, title)
    }



    return (

        <div>
            <form className="book-edit" action="">
                <input className="input" onChange={handleChange} value={title} placeholder="Enter New Title" type="text" />
                <button className='button is-primary' onClick={handleClick}>Save</button>
            </form>
        </div>
    )

}

export default EditBook