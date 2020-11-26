import app from './app';
import * as http from 'http';
import * as mongoose from 'mongoose';
import { MONGO_URL, PORT } from './config'
import { init } from './socket'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    let server = app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    })

    let io = init(server);
    io.on('connection', socket => {
        socket.on('join', ({name}) => {
            console.log(name);
        })
    })
})