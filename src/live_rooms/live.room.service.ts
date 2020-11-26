import { Room } from './types';
import * as uuid from 'uniqid';
import * as _ from 'lodash';
export class Rooms {
    private allRooms: Array<Room>
    constructor() {
        this.allRooms = [];
    }

    createNewRoom(name: string): Room {
        let room: Room = {
            name: name,
            id: uuid()
        }
        this.allRooms.push(room);
        return room
    }

    findRoom(id: string): Room {
        let index = _.findIndex(this.allRooms, (el: Room) => { return el.id === id })
        if(index === -1){
            throw new Error('room id did not match');
        }
        return this.allRooms[index];
    }

    deleteRoom(id: String) {
        _.remove(this.allRooms, (el: Room) => {
            return el.id === id
        })
        return id;
    }
}