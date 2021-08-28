import LabelGroup from "components/LabelGroup"
import {Task as TaskType} from "data/tasks"
import useTasks from "hooks/useTasks"
import {FC} from "react"

import styles from "./Task.module.css"

type TaskProps = Pick<TaskType, "id">

const Task: FC<TaskProps> = ({id}) => {
    const taskCtx = useTasks()
    const task = taskCtx.tasks.find(task => task.id === id)

    const labels = taskCtx.labels.filter(label =>
        label.taskIds.includes(task.id),
    )

    const onChange = event => {
        const isCompleted = event.currentTarget.checked
        const newTask = {...task, isCompleted}
        taskCtx.updateTask(newTask)
    }

    return (
        <div className={styles.task}>
            <input
                type="checkbox"
                name="isCompleted"
                id="isCompleted"
                checked={task.isCompleted}
                onChange={onChange}
            />

            <label htmlFor="isCompleted" className={styles.taskLabel}>
                {task.name}
            </label>

            <LabelGroup labels={labels} />

            <svg
                className={styles.expand}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    )
}

export default Task
