import React, {useState} from 'react';
import Board from "./components/Board";
import {BoardType} from "./types/board";

const boardId = 'ndjnkcdnkdjcnknjcdksndknckj';

const boardData:BoardType = {
    id: 'bhbjhbjhcbjhzb',
    columns: []
}


function App() {

    const [board, setBoard] = useState(boardData);

    return (
        <div className='App'>
            <Board id={board.id} columns={board.columns}/>
        </div>
    );
}

export default App;
