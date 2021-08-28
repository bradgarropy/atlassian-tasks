type Task = {
    id: number
    name: string
    description: string
    isCompleted: boolean
}

const tasks: Task[] = [
    {
        id: 1,
        name: "Task 1",
        description:
            "Implement a page with tasks displayed. Add storybooks and tests to validate UI. Wireup with backend is not part of this task.",
        isCompleted: true,
    },
    {
        id: 2,
        name: "Task 2 that needs to be assigned",
        description: "",
        isCompleted: false,
    },
    {
        id: 3,
        name: "Task 3",
        description: "",
        isCompleted: false,
    },
    {
        id: 4,
        name: "Task 4",
        description: "",
        isCompleted: false,
    },
]

export {tasks}
export type {Task}
