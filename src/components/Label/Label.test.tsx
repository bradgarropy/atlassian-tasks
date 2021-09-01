import Label from "components/Label"
import {mockLabel} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows label", () => {
    render(<Label label={mockLabel} />)
    expect(screen.getByText(mockLabel.label))
})
