import React from 'react';
import Card from "../Card/Card";
import {ColumnType} from "../../types/column";
import AddCard from "../Card/AddCard";
import {useAppSelector} from "../../hooks/useAppSelector";
import styles from '../../styles/_column.module.scss';
import ColumnName from "./ColumnName";


const Column = ({id, name} : ColumnType) => {

    const tasks = useAppSelector((state) => Object.values(state.cards.cards).filter(card => card.columnId === id));

    return (
        <div className={styles.column}>
            <ColumnName initialName={name} columnId={id} />
            <div className={'column-tasks flex flex-col gap-y-1'}>
                {tasks.map(card => <Card id={card.id} columnId={card.columnId} name={card.name} body={card.body} key={card.id}/>)}
            </div>
            <AddCard columnId={id} />
        </div>
    );
};

export default Column;