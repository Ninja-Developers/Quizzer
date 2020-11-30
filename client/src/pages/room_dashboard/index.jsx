import React from 'react';
import { useParams } from 'react-router-dom';

const Index = props => {
    const { roomId } = useParams();

    return (
        <div>
            Shareable roomId: {roomId}
        </div>
    )

}

export default Index;