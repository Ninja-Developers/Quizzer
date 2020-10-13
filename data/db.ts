import fs from 'fs';

export default class Db {
    private filePath: string;
    constructor() {
        this.filePath = "./data/data.json"
    }

    addQuiz(question: string) {
        let data = fs.readFileSync(this.filePath);
        console.log(JSON.parse(data.toString()))
        fs.writeFileSync(this.filePath, question);
    }
}