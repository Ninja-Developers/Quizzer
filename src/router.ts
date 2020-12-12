import { Router } from 'express';
import { createRooms, getRoom, deleteRoom } from './live_rooms/live.room.controller';
import { localSignup, localLogin } from './auth/auth.controller'
import * as passport from 'passport';
const router = Router();

router.route('/')
    .get((req, res) => {
        res.status(200).send('Quizzer API ');
    })

//================================= Authentication routes ================================//

// Local Authentication 
router.route('/auth/local/login')
    .post(passport.authenticate('local', { session: false }), localLogin);

router.route('/auth/local/signup')
    .post(localSignup);


// Rooms route 
router.route('/rooms')
    .post(createRooms)
    .get(getRoom)
    .delete(deleteRoom)

export default router;