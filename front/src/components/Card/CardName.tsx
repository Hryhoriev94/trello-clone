import React, {useEffect, useRef, useState} from 'react';
import {CardNameProps} from "../../interfaces/Card/CardNameProps";
import styles from '../../styles/_card.module.scss'
import {useDispatch} from "react-redux";
import {updateCardName} from "../../store/CardReducer";
const CardName = ({id, initialName}: CardNameProps) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const updateName = () => {
        dispatch(updateCardName({id, name}))
        setIsEditing(false)
    }

    useEffect(() => {
        if(isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    return (
        <div className={styles.card__name} onClick={() => setIsEditing(true)}>
            {isEditing ?
                (
                    <input type='text' ref={inputRef} value={name} onChange={e => setName(e.target.value)} onBlur={updateName} />
                ) :
                (
                    <h3>{name}</h3>
                )
            }
        </div>
    );
};

export default CardName;