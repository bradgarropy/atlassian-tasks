import {Assignee as AssigneeType} from "data/assignees"
import {FC} from "react"

import styles from "./Assignee.module.css"

type AssigneeProps = {
    assignee?: AssigneeType
}

const Assignee: FC<AssigneeProps> = ({assignee}) => {
    return (
        <div className={styles.assignee}>
            {assignee ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    className={styles.photo}
                    src={assignee.photo}
                    alt={assignee.name}
                />
            ) : (
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                    />
                </svg>
            )}

            {assignee ? <span>{assignee.name}</span> : <span>Unassigned</span>}
        </div>
    )
}

export default Assignee
