import Assignee from "components/Assignee"
import {mockAssignee} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows assignee", () => {
    render(<Assignee assignee={mockAssignee} />)

    expect(screen.getByText(mockAssignee.name))

    expect(screen.getByAltText(mockAssignee.name)).toHaveAttribute(
        "src",
        mockAssignee.photo,
    )
})

test("shows unassigned", () => {
    render(<Assignee />)
    expect(screen.getByText("Unassigned"))
})
