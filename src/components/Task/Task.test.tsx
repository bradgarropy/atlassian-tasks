import Task from "components/Task"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Task />)
    expect(screen.getByText("Task"))
})
