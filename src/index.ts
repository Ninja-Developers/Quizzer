import * as express from 'express';
import {PORT} from './config';
import * as path from 'path';


// importing api routes 
import apiRoutes from './router';

const app = express();
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../', 'client', 'build')))

app.use('/api', apiRoutes);

// client handling 
app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
})


app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})