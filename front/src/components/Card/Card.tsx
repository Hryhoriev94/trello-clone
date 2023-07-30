import React from 'react';
import {CardType} from "../../types/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/_card.module.scss'
import {useDispatch} from "react-redux";
import {removeCard} from "../../store/CardReducer";
import CardName from "./CardName";


const Card = ({id, columnId, name, body}: CardType) => {
    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(removeCard(id))
    }

    return (
        <div className={styles.card}>
            <button className={styles.card__delete} onClick={deleteTask}><FontAwesomeIcon icon={faTrash} /></button>
            <CardName initialName={name} id={id} />
            <div className={'card-body'}>{body}</div>
        </div>
    );
};

export default Card;