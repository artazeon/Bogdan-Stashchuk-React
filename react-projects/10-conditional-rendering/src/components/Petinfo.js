function Petinfo(props) {
  const { animal, age, hasPet } = props

  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have animal"

  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h2>I don't have animal</h2>
  )
}
export default Petinfo
