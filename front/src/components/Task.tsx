import React from 'react';
import {TaskType} from "../types/task";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";



const Task = ({id, columnId, name, body}: TaskType) => {
    return (
        <div className={'task bg-slate-50 px-8 py-4 rounded-lg relative'}>
            <button><FontAwesomeIcon icon={faTrash} /></button>
            <div className={'task-name'}>{name}</div>
            <div className={'task-body'}>{body}</div>
        </div>
    );
};

export default Task;