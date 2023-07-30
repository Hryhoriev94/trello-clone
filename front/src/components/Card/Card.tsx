import React from 'react';
import {CardType} from "../../types/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/_card.module.scss'
import {useDispatch} from "react-redux";
import {removeCard} from "../../store/CardReducer";


const Card = ({id, columnId, name, body}: CardType) => {
    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(removeCard(id))
    }

    return (
        <div className={styles.card}>
            <button className={styles.task__delete} onClick={deleteTask}><FontAwesomeIcon icon={faTrash} /></button>
            <div className={'task-name'}>{name}</div>
            <div className={'task-body'}>{body}</div>
        </div>
    );
};

export default Card;