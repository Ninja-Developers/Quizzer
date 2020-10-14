import fs from 'fs';
import path from 'path';
import Db from '../data/db';


let db = new Db();

export const createQuiz = (req: any, res: any) => {
    let { question } = req.body;

    try {
        db.addQuiz(JSON.stringify([{ name: "Souvik" }]))
        return res.json([]);
    } catch (error) {
        return res.status(404).send(error)
    }


}

export const fetchAQuiz = (req: any, res: any) => {
    const { id } = req.query

    let data = db.fetchAQuiz(id)

    return res.json(data);
}
