import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Task from "components/Task"
import {tasks} from "data/tasks"
import {FC} from "react"

const IndexPage: FC = () => (
    <Layout>
        <SEO title="☑ tasks" />

        {tasks.map(task => {
            return <Task key={task.id} task={task} />
        })}
    </Layout>
)

export default IndexPage
