import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState([]);

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
          <div class="bg-light-green" key={item.name}>
            <h4>{item.name}</h4>
            <p>Region: {item.region}</p>
            <p>Area: {item.area}</p>
          </div>
        ))}
      </div>
    );
  };

  export default DataDisplay;
  