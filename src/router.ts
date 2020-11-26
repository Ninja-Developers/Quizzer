import { Router } from 'express';
import { createRooms,getRoom,deleteRoom } from './live_rooms/live.room.controller';
const router = Router();

router.route('/')
    .get((req, res) => {
        res.status(200).send('Quizzer API ');
    })

// Rooms route 
router.route('/rooms')
    .post(createRooms)
    .get(getRoom)
    .delete(deleteRoom)

export default router;