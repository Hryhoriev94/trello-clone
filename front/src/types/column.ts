import {CardType} from "./card";

export type ColumnType = {
    id: string;
    boardId: string;
    name: string;
    cards: CardType[];

};