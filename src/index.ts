import * as express from 'express';
import {PORT} from './config';

// importing api routes 
import apiRoutes from './router';

const app = express();

app.use('/api', apiRoutes);


app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})