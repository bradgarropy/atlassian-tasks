import userEvent from "@testing-library/user-event"
import Task from "components/Task"
import {TaskContext} from "context"
import {mockIncompleteTask, mockTask, mockTaskCtx} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows a completed task", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <Task id={mockTask.id} />
        </TaskContext.Provider>,
    )

    expect(screen.getByLabelText(mockTask.name)).toBeChecked()
})

test("shows an incomplete task", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <Task id={mockIncompleteTask.id} />
        </TaskContext.Provider>,
    )

    expect(screen.getByLabelText(mockIncompleteTask.name)).not.toBeChecked()
})

test("marks a task complete", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <Task id={mockIncompleteTask.id} />
        </TaskContext.Provider>,
    )

    userEvent.click(screen.getByLabelText(mockIncompleteTask.name))

    expect(mockTaskCtx.updateTask).toHaveBeenCalledTimes(1)

    expect(mockTaskCtx.updateTask).toHaveBeenCalledWith({
        ...mockIncompleteTask,
        isCompleted: true,
    })
})

test("marks a task inccomplete", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <Task id={mockTask.id} />
        </TaskContext.Provider>,
    )

    userEvent.click(screen.getByLabelText(mockTask.name))

    expect(mockTaskCtx.updateTask).toHaveBeenCalledTimes(1)

    expect(mockTaskCtx.updateTask).toHaveBeenCalledWith({
        ...mockTask,
        isCompleted: false,
    })
})

test("shows task details", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <Task id={mockTask.id} />
        </TaskContext.Provider>,
    )

    expect(screen.queryByText(mockTask.description)).not
    userEvent.click(screen.getByTestId("expand"))
    expect(screen.getByText(mockTask.description))
})
