import { useRouter } from 'next/router'
import { Quiz } from '../../components/quiz'


export default () => {

    const router = useRouter();

    const { id } = router.query

    let obj = [
        { question: 'What is my name', options: ['Souvik', 'Shounak'], answer: 0 }
    ]

    return (
        <div>
            <Quiz quiz={obj} />
        </div>
    )
}