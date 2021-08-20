import Assignee from "components/Assignee"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Assignee />)
    expect(screen.getByText("Assignee"))
})
