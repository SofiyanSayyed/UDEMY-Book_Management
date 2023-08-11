import { createContext, useState} from 'react'


const BooksContext = createContext()
function Provider({children}) {

    const [count, setCount] = useState(1)

    const provider = {
        count,
        increamentCount: ()=>{
            setCount(count + 1)
        }
    }
    return (
        <BooksContext.Provider value={provider}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;