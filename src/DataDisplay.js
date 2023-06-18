import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://restcountries.com/v2/all?fields=name,region,area')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //   }, []);
  
    useEffect(() => {
      axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        {data.map(item => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>Region: {item.region}</p>
            <p>Area: {item.area}</p>
          </div>
        ))}
      </div>
    );
  };

  export default DataDisplay;
  