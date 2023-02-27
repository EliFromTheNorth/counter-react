import "./IncreaseButton.css"

const IncreaseButton = (props) => {
    return (
        <button className="btn" onClick={props.increase}>+ 1</button>
    )
}

export default IncreaseButton