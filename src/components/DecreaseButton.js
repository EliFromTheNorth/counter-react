import "./DecreaseButton.css"

const DecreaseButton = (props) => {
    return (
        <button className="btn" onClick={props.decrease}> - 1</button>
    )
}

export default DecreaseButton
