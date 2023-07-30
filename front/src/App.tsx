import React, {useState} from 'react';
import Board from "./components/Board";
import {ColumnType} from "./types/column";
import {BoardType} from "./types/board";

const boardId = 'ndjnkcdnkdjcnknjcdksndknckj';



const dataColumns: ColumnType[] = [
    {
        id: 'njankcnkacnk',
        name: 'default',
        boardId: boardId,
        cards: [
            {
                id: "task1",
                name: 'First task',
                body: 'body of task 1',
                columnId: 'njankcnkacnk',
            }
        ]
    }
];

const boardData:BoardType = {
    id: 'bhbjhbjhcbjhzb',
    columns: dataColumns
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
