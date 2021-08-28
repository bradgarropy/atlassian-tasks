import {TaskContext, TaskCtx} from "context"
import {useContext} from "react"

const useTasks = (): TaskCtx => {
    const taskCtx = useContext(TaskContext)
    return taskCtx
}

export default useTasks
