const App = () => {
  const name = 'Peter'
  const age = 10  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/Dredegui">Dredegui</a>
    </div>
  )
}

export default App