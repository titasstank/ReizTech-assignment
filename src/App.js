import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import DataDisplay from './DataDisplay';

function App() {

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,area')
    .then(response => response.json())
    .then(json => console.log(json))
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      <DataDisplay />
    </div>
  );

}

export default App;
