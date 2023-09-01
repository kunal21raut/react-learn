import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import FormValidation from './components/FormValidation';
import FunctionAsProps from './components/FunctionAsProps';

function App() {
  const funcAsProps = () =>{
    alert("Hello from Func Passed as a Props")
  }
  return (
    <div className="App">
      <ConditionalRendering />
      <FormValidation />
      <FunctionAsProps funcAsProps={funcAsProps}/>
      
    </div>
  );

}

export default App;
