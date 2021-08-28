import Label from "components/Label"
import {Label as LabelType} from "data/labels"
import {FC} from "react"

import styles from "./LabelGroup.module.css"

type LabelGroupProps = {
    labels: Pick<LabelType, "label" | "color">[]
    maxLabels?: number
}

const LabelGroup: FC<LabelGroupProps> = ({labels, maxLabels = 2}) => {
    const shownLabels = labels.slice(0, maxLabels)
    const hiddenLabels = labels.slice(maxLabels)

    return (
        <div className={styles.labelGroup}>
            {shownLabels.map((label, index) => {
                return <Label key={index} label={label} />
            })}

            {hiddenLabels.length > 0 ? (
                <span>{`+${hiddenLabels.length}`}</span>
            ) : null}
        </div>
    )
}

export default LabelGroup
