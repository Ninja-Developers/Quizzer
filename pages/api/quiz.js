import nextConnect from 'next-connect'
import { createQuiz } from '../../controller/quiz'

const handler = nextConnect();


handler
    // Create new quiz 
    .post(createQuiz)
    // Fetch all quizzes
    .get()

export default handler