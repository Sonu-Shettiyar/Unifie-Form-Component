
import './App.css'
import Navbar from './components/Navbar'
import FormComponent from './components/formComponent'

function App() {
  function printPage() {
    window.print();
  }
  return (
    <div id='outter-main'>
      <Navbar printPage={printPage} />
      <FormComponent />
    </div>
  )
}

export default App
