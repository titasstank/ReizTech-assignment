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
    <body>
      <div class="bg-llight-green">
        <h1>Countries</h1>
        <button> Hello guys</button>
        <DataDisplay />
      </div>
    </body>
  );

}

export default App;
