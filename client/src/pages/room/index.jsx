import React, { useState } from 'react';
import Axios from 'axios';
import {
    Button
} from '@material-ui/core'

const Index = () => {
    let [roomId, setRoomId] = useState(null);

    let create = () => {
        let name = prompt('Name your room');
        if (name === '' || name === null) {
            return;
        }
        Axios({
            method: 'POST',
            url: 'http://localhost:5000/api/rooms',
            data: {
                name: name
            }
        }).then(res => {
            console.log(res.data.id);
            alert('Room Created');
            setRoomId(res.data.id);
        }).catch(err => {
            console.log(err)
            alert('something went wrong');
        })
    }

    return (
        <div>
            <center>
                <h1>Rooms Page</h1>
            </center>
            <center>
                <Button onClick={create}>
                    Create
                </Button>
                {"\t"}
                <Button>
                    join
                </Button>
            </center>

            <center>
                {(roomId) ? <>
                    roomId: {roomId}
                </> : null}
            </center>
        </div>
    )
}

export default Index