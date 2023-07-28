import React from 'react';
import BoardColumn from "./BoardColumn";
import { BoardType } from "../types/board";


const Board = ({columns}: BoardType) => {
    return (
        <div className='board flex items-start bg-indigo-500 w-full h-screen py-4 px-8'>
            {columns.map((column, index) => <BoardColumn key={column.id} id={column.id} name={column.name} tasks={column.tasks} />)}
        </div>
    );
};

export default Board;