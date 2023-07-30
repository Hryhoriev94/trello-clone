import React from 'react';
import {TaskType} from "../types/task";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/_task.module.scss'
import {useDispatch} from "react-redux";
import {removeTask} from "../store/TasksReducer";


const Task = ({id, columnId, name, body}: TaskType) => {
    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(removeTask(id))
    }

    return (
        <div className={styles.task}>
            <button className={styles.task__delete} onClick={deleteTask}><FontAwesomeIcon icon={faTrash} /></button>
            <div className={'task-name'}>{name}</div>
            <div className={'task-body'}>{body}</div>
        </div>
    );
};

export default Task;