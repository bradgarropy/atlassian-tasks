import {assignees} from "data/assignees"
import {labels} from "data/labels"
import {tasks} from "data/tasks"

const mockMeta = {
    title: "☑ tasks",
}

const mockFacebook = {
    url: "https://atlassian-tasks.vercel.app",
    type: "website",
    title: "☑ tasks",
    description: "☑ tasks",
    image: "https://atlassian-tasks.vercel.app/facebook.png",
}

const mockTwitter = {
    card: "summary",
    site: "@bradgarropy",
    title: "☑ tasks",
    description: "☑ tasks",
    image: "https://atlassian-tasks.vercel.app/twitter.png",
}

const mockAssignees = assignees
const mockAssignee = mockAssignees[0]
const mockLabels = labels
const mockLabel = mockLabels[0]
const mockTasks = tasks
const mockTask = mockTasks[0]
const mockIncompleteTask = mockTasks[1]

const mockTaskCtx = {
    tasks: mockTasks,
    labels: mockLabels,
    assignees: mockAssignees,
    updateTask: jest.fn(),
}

export {
    mockAssignee,
    mockFacebook,
    mockIncompleteTask,
    mockLabel,
    mockLabels,
    mockMeta,
    mockTask,
    mockTaskCtx,
    mockTasks,
    mockTwitter,
}
