import Airtable from 'airtable'

export class AirtableDatabase {

    private base: any

    constructor() {
        this.base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE);
    }

    saveQuestion(question: string) {
        this.base('quizzes').create([{
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

    retrieveQuestion(id: string) {
        this.base('quizzes').find(id, (err, record) => {
            if (err) {
                throw err;
            }
            return record
        })
    }

}