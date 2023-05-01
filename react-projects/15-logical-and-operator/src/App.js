import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import CountReset from './components/CountReset'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    return setCount(count + 1)
  }
  const resetCount = () => {
    return setCount(0)
  }

  const buttonStyle = { backgroundColor: 'lightgreen' }

  return (
    <div className="app">
      <Counter count={count} />
      <Button click={incrementCount} />
      <Button click={incrementCount} />
      <Button click={incrementCount} />
      <Button click={incrementCount} />
      <CountReset style={buttonStyle} click={resetCount} count={count} />
    </div>
  )
}

export default App
