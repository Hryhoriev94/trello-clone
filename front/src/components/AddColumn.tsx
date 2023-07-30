import React from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {AddColumnProps} from "../interfaces/AddColumnProps";
import {addColumn} from "../store/ColumnReducer";
import styles from '../styles/_addColumn.module.scss'


const AddColumn = ({boardId}: AddColumnProps) => {
    const dispatch = useDispatch();
    const addNewColumn = () => {
        console.log(1)
        dispatch(addColumn({
            id: uuidv4(),
            name: 'New Column',
            tasks: [],
            boardId: boardId
        }))
    }

    return (
        <div className={styles['addColumn']} onClick={addNewColumn}>
            + Add a column
        </div>
    );
};

export default AddColumn;