import React, {useMemo} from 'react';
import Card from "../Card/Card";
import {ColumnType} from "../../types/column";
import AddCard from "../Card/AddCard";
import {useAppSelector} from "../../hooks/useAppSelector";
import styles from '../../styles/_column.module.scss';
import ColumnName from "./ColumnName";
import {RootState} from "../../store/store";


const Column = ({id, name} : ColumnType) => {

    const cardsState = useAppSelector((state: RootState) => state.cards.cards);

    const cards = useMemo(() => {
        return Object.values(cardsState).filter(card => card.columnId === id);
    }, [cardsState, id]);

    return (
        <div className={styles.column}>
            <ColumnName initialName={name} columnId={id} />
            <div className={styles.column__cards}>
                {cards.map((cardDetail, index) => <Card card={cardDetail} key={cardDetail.id}/>)}
            </div>
            <AddCard columnId={id} />
        </div>
    );
};

export default Column;