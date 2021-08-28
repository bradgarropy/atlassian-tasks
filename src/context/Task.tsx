import {Assignee, assignees as defaultAssignees} from "data/assignees"
import {Label, labels as defaultLabels} from "data/labels"
import {Task, tasks as defaultTasks} from "data/tasks"
import {createContext, FC, useState} from "react"

type TaskCtx = {
    tasks: Task[]
    labels: Label[]
    assignees: Assignee[]
    updateTask: (task: Task) => void
}

const TaskContext = createContext({} as TaskCtx)

const TaskProvider: FC = ({children}) => {
    const [tasks, setTasks] = useState(defaultTasks)
    const [labels] = useState(defaultLabels)
    const [assignees] = useState(defaultAssignees)

    const updateTask = newTask => {
        const newTasks = [...tasks]
        const index = newTasks.findIndex(task => task.id === newTask.id)
        newTasks[index] = newTask
        setTasks(newTasks)
    }

    const context: TaskCtx = {
        tasks,
        labels,
        assignees,
        updateTask,
    }

    return (
        <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
    )
}

export {TaskContext, TaskProvider}
export type {TaskCtx}
