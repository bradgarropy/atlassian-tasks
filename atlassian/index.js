GET /tasks
    {id, name, completionState}

GET /assignee?taskId
    {name, photo}

GET /labels?taskId
    {label, color}


POST /tasks?taskId







// priority data
async getTasks()
async getLabels(taskId)


// only needed on expansion
async getAssignees(taskId)



// React component
Tasks()

    useEffect(
        // getTasks
        // iterate over tasks and run
        // getLabels(taskId)
    , [])

// Task Context
const [tasks, setTasks] = useState([])
const [assignees, setassignees] = useState([])
const [labels, setlabels] = useState([])


useEffect(
    // getTasks
    // iterate over tasks and run
    // getLabels(taskId)
, [])


async setCompletedStatus(id, isChecked) {
    // find the relevant task

    // modify its chcked value
    newTasks

    // assumie fetch will succeed
    // update state
    setTasks(response.tasks)

    const response = async fetch(`atlassian.com/tasks?${taskId}`)
    // success
    // do nothing

    // failure
    // show toast, back out local state updates
}

<Provider value={tasks, labels, assignees, setCompletedStatus}/>


// Components list
<TasksProvider>
    Tasks(Array[Task])
        const tasksCtx = useTasks()

        Task({Task task})
            Checkbox()
                onClick(() => setCompletedStated(task.id, event.target.checked))

            TaskDetails(Assignee assignee) <-- data fetching
            LabelGroup(Array[Label]) <-- data fetching
                Label({label})
            ExpandButton({isOpen})
</TasksProvider>









