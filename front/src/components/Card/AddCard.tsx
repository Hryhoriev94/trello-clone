import React from 'react';
import {AddCardProps} from "../../interfaces/Card/AddCardProps";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {addCard} from "../../store/CardReducer";


const AddCard = ({columnId}: AddCardProps) => {
    const dispatch = useDispatch();
    const addNewTask = () => {
        dispatch(addCard({
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

export default AddCard;