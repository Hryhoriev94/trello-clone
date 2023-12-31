import React from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {AddColumnProps} from "../../interfaces/Column/AddColumnProps";
import {addColumn} from "../../store/ColumnReducer";
import styles from '../../styles/_addColumn.module.scss'


const AddColumn = ({boardId}: AddColumnProps) => {
    const dispatch = useDispatch();
    const addNewColumn = () => {
        dispatch(addColumn({
            id: uuidv4(),
            name: 'New Column',
            cards: [],
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