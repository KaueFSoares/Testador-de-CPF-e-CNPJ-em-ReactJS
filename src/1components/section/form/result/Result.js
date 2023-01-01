import styles from "./Result.module.css"
import Input from "./input/Input"

function Result(props) {



    return (

        <div className={styles.resultBox}>
            <Input selected={props.selected}  />
        </div>
    )



}

export default Result