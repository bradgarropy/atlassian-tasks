import Assignee from "components/Assignee"
import {Task} from "data/tasks"
import useTasks from "hooks/useTasks"
import {FC} from "react"

import styles from "./TaskDetails.module.css"

type TaskDetailsProps = Pick<Task, "id">

const TaskDetails: FC<TaskDetailsProps> = ({id}) => {
    const taskCtx = useTasks()
    const task = taskCtx.tasks.find(task => task.id === id)

    const assignee = taskCtx.assignees.find(assignee =>
        assignee.taskIds.includes(task.id),
    )

    return (
        <div className={`${styles.taskDetails} ${styles.slidein}`}>
            <p>{task.description}</p>
            <Assignee assignee={assignee} />
        </div>
    )
}

export default TaskDetails
