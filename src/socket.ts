import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'
let io: Server;

export const init = (httpServer: HttpServer) => {
    io = require('socket.io')(httpServer);
    return io;
}

export const getIo = () => {
    if (!io) {
        throw new Error('socket not initialized')
    }
    return io;
}