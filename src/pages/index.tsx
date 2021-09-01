import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Task from "components/Task"
import {useTasks} from "hooks"
import {FC} from "react"

const IndexPage: FC = () => {
    const taskCtx = useTasks()

    return (
        <Layout>
            <SEO title="☑ tasks" />

            {taskCtx.tasks.map(task => {
                return <Task key={task.id} id={task.id} />
            })}
        </Layout>
    )
}

export default IndexPage
