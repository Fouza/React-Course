import logo from './logo.svg';
import './App.css';
import TextComp from './components/TextComp';
import InputComp, { AnotherComp, TestComp } from './components/InputComp';


function App() {
  const x = "Any text"
  return (
    <div>
      {/* <TextComp title="Welcome Page" bgcolor="red" textColor="#000" /> */}
      {/* <TextComp title="Settings Page" bgcolor="#4f556f" textColor="#FFF" /> */}
      <InputComp pHolder="Welcome placeholder" initialValue="TEST" />
      <AnotherComp />
    </div>
  );
}

export default App;