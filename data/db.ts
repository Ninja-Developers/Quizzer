import fs from 'fs';

export default class Db {
    private filePath: string;
    constructor() {
        this.filePath = "./data/data.json"
    }

    addQuiz(question: string) {
        let data = fs.writeFileSync(this.filePath, question);
    }
}