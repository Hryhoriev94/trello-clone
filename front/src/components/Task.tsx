import React from 'react';
import {TaskType} from "../types/task";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/_task.module.scss'


const Task = ({id, columnId, name, body}: TaskType) => {
    return (
        <div className={styles.task}>
            <button><FontAwesomeIcon icon={faTrash} /></button>
            <div className={'task-name'}>{name}</div>
            <div className={'task-body'}>{body}</div>
        </div>
    );
};

export default Task;