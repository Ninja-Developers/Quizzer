import {Router} from 'express';

const router =  Router();

router.route('/')
    .get((req,res) => {
        res.status(200).send('Quizzer API ');
    })


export default router;