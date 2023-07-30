import React, {useMemo} from 'react';
import Column from "./Column/Column";
import { BoardType } from "../types/board";
import AddColumn from "./Column/AddColumn";
import {useAppSelector} from "../hooks/useAppSelector";
import styles from '../styles/_board.module.scss'

const Board = ({id}: BoardType) => {

    const columnsState = useAppSelector((state) => state.columns.columns);

    const columns = useMemo(() => {
        return Object.values(columnsState).filter(column => column.boardId === id);
    }, [columnsState, id])


    return (
        <div className={styles.board} style={{ "--columns": columns.length + 1 } as React.CSSProperties}>
            {columns.map((column, index) =>
                <Column
                    key={column.id}
                    boardId={id}
                    id={column.id}
                    name={column.name}
                    cards={column.cards} />)}
            <AddColumn boardId={id} />
        </div>
    );
};

export default Board;