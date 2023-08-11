import { useState } from "react"

function CreateBook({onCreate}){
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleClick = (event) =>{
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form action="">
                <label htmlFor="title">Enter Title</label>
                <input className="input" onChange={handleChange} value={title} type="text" id="title" />
                <button className="button" onClick={handleClick}>Create</button>
            </form>
        </div>
    )

}

export default CreateBook