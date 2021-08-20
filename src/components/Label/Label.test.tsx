import Label from "components/Label"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Label />)
    expect(screen.getByText("Label"))
})
