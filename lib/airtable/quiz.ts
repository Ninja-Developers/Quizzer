import Airtable from 'airtable'

const Base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE)

const getAllQuizzes = async () => {
    let data = await Base('quizzes').select({ view: "Grid view" }).firstPage().then(result => {

        return result.map(el => el.fields)
    }).catch(err => {
        throw err
    })

    return data
}

const createQuiz = async quizzes => {
    Base('quizzes').create([
        {
            "fields": {
                "questions": JSON.parse(quizzes)
            }
        }
    ]).then(records => {
        return records[0].id
    }).catch(err => {
        throw err
    })
}

const fetchAQuiz = async id => {
    Base('quizzes').find(id).then(record => {
        return record
    }).catch(err => {
        throw err
    })
}


export {
    getAllQuizzes,
    createQuiz,
    fetchAQuiz
}