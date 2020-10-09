import Airtable from 'airtable'
import { useState, useEffect } from 'react'




export function saveQuestion(question: string) {
    let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE);
    base('quizzes').create([{
        "fields": {
            "Questions": question
        }
    }], (err, records) => {
        if (err) {
            throw err;
        }
        return records[0].getId();
    })
}

export function retrieveQuestion(id: string) {
    let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE);
    base('quizzes').find(id, (err, record) => {
        if (err) {
            throw err;
        }
        return record
    })
}

type Option = "save-quiz" | "fetch-question";

export const useQuiz = (opt: Option) => {
    let [data, setData] = useState(null)
    let saveQuiz = async (question: string) => {
        let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE);
        base('quizzes').create([{
            "fields": {
                "Questions": question
            }
        }]).then(rec => {
            return rec
        }).catch(err => {
            throw err
        })
    }

    useEffect(() => {
        switch (opt) {
            case "save-quiz":
                setData(saveQuiz)
        }
    },[])

    return data
}