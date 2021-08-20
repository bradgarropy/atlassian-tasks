import {Label as LabelType} from "data/labels"
import {FC} from "react"

import styles from "./Label.module.css"

type LabelProps = {
    label: Pick<LabelType, "label" | "color">
}

const Label: FC<LabelProps> = ({label}) => {
    return (
        <span className={styles.label} style={{backgroundColor: label.color}}>
            {label.label}
        </span>
    )
}

export default Label
