import React from 'react';


const Index = () => {

    let create = () => {
        let data = prompt('Name your room');
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

        </div>
    )
}

export default Index