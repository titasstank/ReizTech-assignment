import './App.css';
import DataDisplay from './DataDisplay';
import SortButton from './SortButton';

function App() {

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
