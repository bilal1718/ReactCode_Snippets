
const App = () => {
  function CheckClick(){
    console.log("Clicked!")
  }
  return (
    <button data-testid='button' onClick={CheckClick}>Click me!</button>
  )
}

export default App
