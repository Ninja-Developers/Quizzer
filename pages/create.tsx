// importing modules 
import QuizHolder from '../components/questions/quiz.holder'
import { Quiz } from '../lib/types/quiz'

const Create = props => {



    let data: Array<Quiz> = [
        {
            question: 'what is my name',
            options: ['Souvik', 'Shounak'],
            answer: 0
        },
        {
            question: 'what is your name',
            options: ['Shounak', 'Souvik'],
            answer: 0
        }
    ]

    return <>
        {data.map(el => <QuizHolder question={el.question} options={el.options} answer={el.answer} />)}
    </>
}


export default Create