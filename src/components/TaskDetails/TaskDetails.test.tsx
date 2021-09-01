import TaskDetails from "components/TaskDetails"
import {TaskContext} from "context"
import {mockAssignee, mockTask, mockTaskCtx} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows task details", () => {
    render(
        <TaskContext.Provider value={mockTaskCtx}>
            <TaskDetails id={mockTask.id} />
        </TaskContext.Provider>,
    )

    expect(screen.getByText(mockTask.description))
    expect(screen.getByText(mockAssignee.name))
})
