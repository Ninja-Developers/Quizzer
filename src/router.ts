import { Router } from 'express';
import { createRooms, getRoom, deleteRoom } from './live_rooms/live.room.controller';
import * as passport from 'passport';
const router = Router();

router.route('/')
    .get((req, res) => {
        res.status(200).send('Quizzer API ');
    })

// Authentication routes //

// Local Authentication 
router.route('/auth/local/login')

router.route('/auth/local/signup')
    .post(passport.authenticate('local', { session: false }));


// Rooms route 
router.route('/rooms')
    .post(createRooms)
    .get(getRoom)
    .delete(deleteRoom)

export default router;