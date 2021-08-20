import {Assignee, assignees} from "data/assignees"
import type {NextApiRequest, NextApiResponse} from "next"

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Assignee[]>,
): void => {
    if (!req.query.taskId) {
        res.status(200).json(assignees)
        return
    }

    const taskId = parseInt(req.query.taskId as string)

    const taskAssignees = assignees.filter(assignee =>
        assignee.taskIds.includes(taskId),
    )

    res.status(200).json(taskAssignees)
    return
}

export default handler
