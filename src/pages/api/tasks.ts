import {Task, tasks} from "data/tasks"
import type {NextApiRequest, NextApiResponse} from "next"

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Task | Task[]>,
): void => {
    if (!req.query.id) {
        res.status(200).json(tasks)
        return
    }

    const id = parseInt(req.query.id as string)
    const task = tasks.find(task => task.id === id)

    res.status(200).json(task)
    return
}

export default handler
