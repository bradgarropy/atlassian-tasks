import {Label, labels} from "data/labels"
import type {NextApiRequest, NextApiResponse} from "next"

const handler = (req: NextApiRequest, res: NextApiResponse<Label[]>): void => {
    if (!req.query.taskId) {
        res.status(200).json(labels)
        return
    }

    const taskId = parseInt(req.query.taskId as string)
    const taskLabels = labels.filter(label => label.taskIds.includes(taskId))

    res.status(200).json(taskLabels)
    return
}

export default handler
