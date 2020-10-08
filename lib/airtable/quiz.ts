import Airtable from 'airtable'

export class AirtableDatabase {

    private base: any

    constructor() {
        this.base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE);
    }

}