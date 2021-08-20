import LabelGroup from "components/LabelGroup"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<LabelGroup />)
    expect(screen.getByText("Labels"))
})
