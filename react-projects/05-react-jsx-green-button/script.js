const App = ({ initialButtonText, initialClassesList }) => {
  console.log(initialButtonText)


  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setclassesList] = React.useState(initialClassesList)

  const onButtonClick = () => {
    setButtonText(`Hello from React`)
    setclassesList(`${initialClassesList} green-btn`)
  }

  return (
    <div className="app">
      <button onClick={onButtonClick} className={classesList}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me please" initialClassesList="ap" />)
