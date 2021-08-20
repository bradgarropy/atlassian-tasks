type Assignee = {
    name: string
    photo: string
    taskIds: number[]
}

const assignees = [
    {
        name: "Alana",
        photo: "https://github.com/alanammorais.png",
        taskIds: [1],
    },
]

export {assignees}
export type {Assignee}
