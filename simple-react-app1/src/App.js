import './App.css';


const Person = (props) =>  {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age} </h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} lastName={'Smith'} age={'24'} />
      <Person name={'Ana'} age={20 + 2} />
    </div>
  );
}
export default App;