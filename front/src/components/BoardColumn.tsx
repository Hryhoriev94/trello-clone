import React from 'react';
import Task from "./Task";
import {ColumnType} from "../types/column";
import AddTask from "./AddTask";
import {useAppSelector} from "../hooks/useAppSelector";



const BoardColumn = ({id, name} : ColumnType) => {

    const tasks = useAppSelector((state) => Object.values(state.tasks.tasks).filter(task => task.columnId === id));

    return (
        <div className={'column bg-slate-400 py-4 px-8 pb-8 rounded-lg'}>
            <div className={'column-name mb-4 text-center text-slate-100 text-lg'}><h2>{name}</h2></div>
            <div className={'column-tasks flex flex-col gap-y-1'}>
                {tasks.map(task => <Task id={task.id} columnId={task.columnId} name={task.name} body={task.body} key={task.id}/>)}
            </div>
            <AddTask columnId={id} />
        </div>
    );
};

export default BoardColumn;