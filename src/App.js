import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react'
import Message from './components/Message'
import ChangeColor from './components/Example.js'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <Message
        username="george.gsg"
        text="Hey! I'm George. Nice to meet you. I have some spare time. Not doing much right now. Let's talk!"
        imageUrl="https://bit.ly/2Z4KKcF"
        imageAlt="Rear view of modern home with pool"
        colorScheme="teal"
        date="May 1, 2021"
        time="2:30 PM"/>
      <ThemeToggle/>
      {/* <ChangeColor title="George"/> */}
    </div>
  );
}

export default App;

