import { Request, Response } from 'express'
import { Rooms } from './live.room.service'
let room = new Rooms();

export const createRooms = (req: Request, res: Response) => {
    let { name } = req.body;
    let newRoom = room.createNewRoom(name);
    return res.status(200).json(newRoom);
}

export const getRoom = (req: Request, res: Response) => {
    let { id } = req.body;
    try {
        let existingRoom = room.findRoom(id);
        return res.status(200).json(existingRoom);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

export const deleteRoom = (req: Request, res: Response) => {
    let { id } = req.body;
    let deletedRoomId = room.deleteRoom(id);
    return res.status(200).send(deletedRoomId);
}