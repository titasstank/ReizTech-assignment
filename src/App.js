import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import DataDisplay from './DataDisplay';
import SortButton from './SortButton';

function App() {

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,area')
    .then(response => response.json())
    .then(json => console.log(json))
  }, []);

  return (
    <body class ="bg-llight-green">
      <div class='page-div'>
        <h1>Countries</h1>
        <SortButton />
        <DataDisplay />
      </div>
    </body>
  );

}

export default App;
