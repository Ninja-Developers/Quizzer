import { useRouter } from 'next/router'
import { Quiz } from '../../components/quiz'


export default () => {

    const router = useRouter();

    const { id } = router.query

    return (
        <div>
            <Quiz />
        </div>
    )
}