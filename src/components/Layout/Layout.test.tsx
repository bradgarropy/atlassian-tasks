import Layout from "components/Layout"
import {render, screen} from "test-utils/render"

test("shows layout", () => {
    render(
        <Layout>
            <p>Testing</p>
        </Layout>,
    )

    expect(screen.getByText("Testing"))
})
