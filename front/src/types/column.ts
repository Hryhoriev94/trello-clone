import {TaskType} from "./task";

export type ColumnType = {
    id: string;
    boardId: string;
    name: string;
    tasks: TaskType[];

};