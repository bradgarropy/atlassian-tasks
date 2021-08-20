import {Assignee as AssigneeType} from "data/assignees"
import {FC} from "react"

import styles from "./Assignee.module.css"

type AssigneeProps = {
    assignee: AssigneeType
}

const Assignee: FC<AssigneeProps> = ({assignee}) => {
    return (
        <div className={styles.assignee}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className={styles.photo}
                src={assignee.photo}
                alt={assignee.name}
            />

            <span>{assignee.name}</span>
        </div>
    )
}

export default Assignee
