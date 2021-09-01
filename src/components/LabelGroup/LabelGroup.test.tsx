import LabelGroup from "components/LabelGroup"
import {mockLabels} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows one label", () => {
    const labels = mockLabels.slice(0, 1)

    render(<LabelGroup labels={labels} />)

    labels.forEach(label => {
        expect(screen.getByText(label.label))
    })
})

test("shows max labels", () => {
    const labels = mockLabels.slice(0, 2)

    render(<LabelGroup labels={labels} />)

    labels.forEach(label => {
        expect(screen.getByText(label.label))
    })
})

test("shows more than max labels", () => {
    const labels = mockLabels
    const shownLabels = labels.slice(0, 2)

    render(<LabelGroup labels={labels} />)

    shownLabels.forEach(label => {
        expect(screen.getByText(label.label))
    })

    expect(screen.getByText("+5"))
})
