import nextConnect from 'next-connect'
import { createQuiz, fetchAQuiz } from '../../controller/quiz'

const handler = nextConnect();


handler
    // Create new quiz 
    .post(createQuiz)
    // Fetch all quizzes
    .get(fetchAQuiz)

export default handler