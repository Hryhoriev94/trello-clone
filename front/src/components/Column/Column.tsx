import React from 'react';
import Task from "../Task";
import {ColumnType} from "../../types/column";
import AddTask from "../AddTask";
import {useAppSelector} from "../../hooks/useAppSelector";
import styles from '../../styles/_column.module.scss';
import ColumnName from "./ColumnName";


const Column = ({id, name} : ColumnType) => {

    const tasks = useAppSelector((state) => Object.values(state.tasks.tasks).filter(task => task.columnId === id));

    return (
        <div className={styles.column}>
            <ColumnName initialName={name} columnId={id} />
            <div className={'column-tasks flex flex-col gap-y-1'}>
                {tasks.map(task => <Task id={task.id} columnId={task.columnId} name={task.name} body={task.body} key={task.id}/>)}
            </div>
            <AddTask columnId={id} />
        </div>
    );
};

export default Column;