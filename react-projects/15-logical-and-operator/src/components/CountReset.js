function CountReset(props) {
  return (
    <>
      {props.count > 0 && (
        <div>
          <button onClick={props.click}>Reset</button>
        </div>
      )}
    </>
  )
}

export default CountReset
