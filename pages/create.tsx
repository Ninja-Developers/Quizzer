// importing modules 
import { useRef, useState } from 'react'

const Question = () => {

    return (
        <div>
            <input />
        </div>
    )
}

const Create = () => {
    const mainRef = useRef(null)
    const [quizCount, setQuizCount] = useState([1,2,3])
    return <>
        <div ref={mainRef}>
            {quizCount.map(el => <Question />)}
            <button onClick={() => {
                console.log(mainRef.current.children[0].firstElementChild.value)
                let children: Array<any> = mainRef.current.children
                console.log(children.length)
            }}>Press</button>
        </div>
    </>
}



export default Create