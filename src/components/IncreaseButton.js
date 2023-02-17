import "./IncreaseButton.css"

const IncreaseButton = (props) => {
    return (
        <button onClick={props.increase}>+ 1</button>
    )
}

export default IncreaseButton