import React from 'react';
import {AddTaskProps} from "../interfaces/AddTaskProps";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {addTask} from "../store/TasksReducer";


const AddTask = ({columnId}: AddTaskProps) => {
    const dispatch = useDispatch();
    const addNewTask = () => {
        dispatch(addTask({
            id: uuidv4(),
            name: 'New Task',
            body: '',
            columnId: columnId
        }))
    }

    return (
        <div className={'add-task mt-2 p-2 rounded-lg hover:bg-slate-300 cursor-pointer'} onClick={addNewTask}>
            + Add new task
        </div>
    );
};

export default AddTask;