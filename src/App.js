import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react'
import Message from './components/Message'
import ChangeColor from './components/Example.js';

function App() {
  return (
    <div className="App">
      <Message
        username="george.gsg"
        text="Hey! I'm George. Nice to meet you. I have some spare time. Not doing much right now. Let's talk!"
        imageUrl="https://bit.ly/2Z4KKcF"
        imageAlt="Rear view of modern home with pool"
        color="orange.200"
        bg="blue.500"
        date="May 1, 2021"
        time="2:30 PM"/>
      {/* <ChangeColor title="George"/> */}
    </div>
  );
}

export default App;

