import nextConnect from 'next-connect'

const handler = nextConnect();


handler
    // Create new quiz 
    .post()
    // Fetch all quizzes
    .get()

export default handler