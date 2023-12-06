import './App.css';
import { Reset } from '@adsk/alloy-react-theme';
// import { ChatModule } from '@adsk/ankit-ca-chat-app';

const fetchBotResponse = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Bot response');
  }, 1000);
});

function App() {
  return (
    <>
      <Reset />
      {/* <ChatModule fetchBotResponse={fetchBotResponse} /> */}
    </>
  );
}

export default App;
