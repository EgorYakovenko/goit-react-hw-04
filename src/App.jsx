import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
