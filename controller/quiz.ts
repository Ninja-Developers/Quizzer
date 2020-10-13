import fs from 'fs';
import path from 'path';
import Db from '../data/db';



export const createQuiz = (req: any, res: any) => {
    let { question } = req.body;
    let p:string = path.relative(__dirname,'./data');

    let db = new Db();

    db.addQuiz(JSON.stringify([{name: "Souvik"}]))

    return res.json([]);
}
