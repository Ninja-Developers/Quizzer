import fs from 'fs';
import path from 'path';
import Db from '../data/db';


let db = new Db();

export const createQuiz = (req: any, res: any) => {
    let { question } = req.body;

    try {
        let id = db.addQuiz(question);
        return res.send(id);
    } catch (error) {
        return res.status(404).send(error)
    }


}

export const fetchAQuiz = (req: any, res: any) => {
    const { id } = req.query

    let data = db.fetchAQuiz(id)

    return res.json(data);
}
