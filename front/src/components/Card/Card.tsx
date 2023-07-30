import React, {useState} from 'react';
import {CardType} from "../../types/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/_card.module.scss'
import {useDispatch} from "react-redux";
import {removeCard} from "../../store/CardReducer";
import CardName from "./CardName";

const Card = ({ card }: { card: CardType }) => {

    const {id, columnId, name, body, index} = card;
    const [currentCard, setCurrentCard] = useState<CardType | null>(null);
    const [cardClasses, setCardClasses] = useState(styles.card)


    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(removeCard(id))
    }

    const DragStartHandler = (e: React.DragEvent<HTMLElement>, card: CardType) => {
        e.dataTransfer.setData('text/plain', id);
        setCurrentCard(card);
        setCardClasses(`${styles.card}  ${styles.grabbed}`)
    }

    function DragEndHandler(e: React.DragEvent<HTMLElement>) {
        console.log()
    }

    function DragLeaveHandler(e: React.DragEvent<HTMLElement>) {

    }

    function DropHandler(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
    }

    return (
        <div className={cardClasses} draggable={true}
             onDragStart={(e) => DragStartHandler(e, card)}
             onDragLeave={DragLeaveHandler}
             onDragEnd={DragEndHandler}
             onDrop={DropHandler}
        >
            <button className={styles.card__delete} onClick={deleteTask}><FontAwesomeIcon icon={faTrash}/></button>
            <CardName initialName={name} id={id}/>
            <div className={'card-body'}>{body}</div>
        </div>
    );
};

export default Card;