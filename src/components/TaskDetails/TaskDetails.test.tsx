import TaskDetails from "components/TaskDetails"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<TaskDetails />)
    expect(screen.getByText("TaskDetails"))
})
