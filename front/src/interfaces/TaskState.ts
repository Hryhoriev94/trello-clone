import {TaskType} from "../types/task";

export interface TasksState {
    tasks: Record<string, TaskType>
}