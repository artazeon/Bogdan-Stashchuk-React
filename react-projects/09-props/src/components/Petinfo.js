function Petinfo(props) {
  const { animal, age, hasPet } = props
  console.log(hasPet)
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have animal"

  return <h1>{text}</h1>
}
export default Petinfo
