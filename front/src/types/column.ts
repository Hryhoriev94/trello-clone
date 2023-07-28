import {TaskType} from "./task";

export type ColumnType = {
    id: string;
    name: string;
    tasks: TaskType[];
};