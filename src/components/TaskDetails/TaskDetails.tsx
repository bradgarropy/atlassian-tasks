import Assignee from "components/Assignee"
import {Assignee as AssigneeType} from "data/assignees"
import {Task} from "data/tasks"
import {FC} from "react"

import styles from "./TaskDetails.module.css"

type TaskDetailsProps = {
    task: Task
    assignee: AssigneeType
}

const TaskDetails: FC<TaskDetailsProps> = ({task, assignee}) => {
    return (
        <div className={styles.taskdetails}>
            <p>{task.description}</p>
            <Assignee assignee={assignee} />
        </div>
    )
}

export default TaskDetails
