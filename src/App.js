import logo from './logo.svg';
import './App.css';
import TextComp from './components/TextComp';
import InputComp from './components/InputComp';

function App() {
  return (
    <div>
      <TextComp title={"MarketPlace"} color="#565463" size={12} margin="40px 40px" />
      <InputComp initialValue="This is the App" ph="My placeholder" />
      <TextComp title="MarketPlace" color="#feeeec" />
    </div>
  );
}

export default App;