import React, {useEffect, useRef, useState} from 'react';
import styles from "../../styles/_column.module.scss";
import {ColumnNameProps} from "../../interfaces/Column/ColumnNameProps";
import {useDispatch} from "react-redux";
import {updateColumnName} from "../../store/ColumnReducer";

const ColumnName = ({initialName, columnId}: ColumnNameProps) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const updateName = () => {
        dispatch(updateColumnName({columnId, name}))
        setIsEditing(false)
    }

    useEffect(() => {
        if(isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])



    return (
        <div className={styles.column__name} onClick={() => setIsEditing(true)}>
            {isEditing ?
                (
                    <input type='text' ref={inputRef} value={name} onChange={e => setName(e.target.value)} onBlur={updateName} />
                ) :
                (
                    <h2>{name}</h2>
                )
            }
        </div>

    );
};

export default ColumnName;