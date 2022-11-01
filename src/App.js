import { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>asdasd</button>
    </div>
  );
}

export default App;
