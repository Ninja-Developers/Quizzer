import fs from 'fs';
import uniqid from 'uniqid'

interface StoreType {
    id: string,
    question: string,
    answers: string
}

export default class Db {
    private filePath: string;
    constructor() {
        this.filePath = "./data/data.json"
    }

    addQuiz(question: string) {
        let id = uniqid();
        let data = this._fetchData();
        let newQuestion: StoreType = {
            id: id,
            question: question,
            answers: ''
        }
        data.push(newQuestion);

        this._write(data);

    }
    fetchAQuiz(id: string): StoreType {
        let data: Array<StoreType> = this._fetchData();

        let res: StoreType;

        data.forEach((el: StoreType) => {
            if(el.id === id){
                res = el;
            }
        });

        return res;
    }

    private _fetchData(): Array<StoreType> {
        let data = fs.readFileSync(this.filePath);
        let db: Array<StoreType> = JSON.parse(data.toString());

        return db
    }

    private _write(data: Array<StoreType>) {
        fs.writeFileSync(this.filePath, JSON.stringify(data))
    }
}