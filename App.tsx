import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Button } from './components/Button'
import { Input } from './components/Input'
import { LoggedIn } from './components/State/LoggedIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button click={(event, id) => {
          console.log("Button Clicked !!", event, id)
        }}></Button>
        <Input value="Vishu" changehandler={(event) => {
          console.log(event)
        }}/>
        <LoggedIn></LoggedIn>
        </header>
    </div>
  );
}

export default App;
