import React, {useMemo} from 'react';
import {AddCardProps} from "../../interfaces/Card/AddCardProps";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {addCard} from "../../store/CardReducer";
import {RootState} from "../../store/store";


const AddCard = ({columnId}: AddCardProps) => {
    const dispatch = useDispatch();
    const cardsState = useSelector((state:RootState) => state.cards.cards);
    const cardsCount = useMemo(() => {
        return Object.values(cardsState).filter(card => card.columnId === columnId).length
    }, [cardsState])
    const addNewTask = () => {
        dispatch(addCard({
            id: uuidv4(),
            name: 'New Task',
            body: '',
            columnId: columnId,
            index: cardsCount
        }))
    }

    return (
        <div className={'add-task mt-2 p-2 rounded-lg hover:bg-slate-300 cursor-pointer'} onClick={addNewTask}>
            + Add new task
        </div>
    );
};

export default AddCard;