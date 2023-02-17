import DecreaseButton from "./components/DecreaseButton"
import { useState } from "react"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"

const App = () => {
  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const resetToZero = () => {
    setValue(0)
  }
  
  return (
      <div>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <DecreaseButton decrease={decreaseOne}/>
        <IncreaseButton increase={increaseOne}/>
        <ResetButton reset={resetToZero} />
      </div>
  )
}

export default App