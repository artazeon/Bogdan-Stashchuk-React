import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const textName = [
  'Click me!!!',
  'Click me please',
  'Click me',
  'Click me please',
  'Hit me',
  'Click me!!!',
  'Press me',
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    return setCount(count + 1)
  }

  return (
    <div className="app">
      <Counter count={count} />

      {textName.map((item, index) => {
        return <Button click={incrementCount} text={item} key={index} />
      })}
    </div>
  )
}

export default App
