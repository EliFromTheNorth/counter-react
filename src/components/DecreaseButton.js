import "./DecreaseButton.css"

const DecreaseButton = (props) => {
    return (
        <button onClick={props.decrease}> - 1</button>
    )
}

export default DecreaseButton
