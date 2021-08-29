type Label = {
    label: string
    color: string
    taskIds: number[]
}

const labels: Label[] = [
    {
        label: "ui",
        color: "lightgray",
        taskIds: [1],
    },
    {
        label: "sprint 1",
        color: "lightskyblue",
        taskIds: [1, 2],
    },
    {
        label: "backend",
        color: "palegreen",
        taskIds: [3, 4],
    },
    {
        label: "pir",
        color: "gold",
        taskIds: [3],
    },
    {
        label: "foo",
        color: "purple",
        taskIds: [3],
    },
    {
        label: "bar",
        color: "purple",
        taskIds: [3],
    },
    {
        label: "baz",
        color: "purple",
        taskIds: [3],
    },
]

export {labels}
export type {Label}
