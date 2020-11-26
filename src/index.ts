import * as express from 'express';
import { PORT, MONGO_URL } from './config';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { init } from './socket'

// importing api routes 
import apiRoutes from './router';

const app = express();
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../', 'client', 'build')))

app.use('/api', apiRoutes);

// client handling 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
})

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected')
        const server = app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
        let io = init(server);
    })

