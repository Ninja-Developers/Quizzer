import React, { useState } from 'react';
import Axios from 'axios';

const Index = () => {
    let [roomId, setRoomId] = useState(null);

    let create = () => {
        let name = prompt('Name your room');
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
                <button onClick={create}>
                    Create
                </button>
                {"\t"}
                <button>
                    join
                </button>
            </center>

            <center>
                {(roomId)? <>
                roomId: {roomId}
                </>: null}
            </center>
        </div>
    )
}

export default Index