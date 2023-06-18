import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [isReversed, setIsReversed] = useState(false);

    useEffect(() => {
      axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const toggleOrder = () => {
      setIsReversed(!isReversed);
      setData(prevData => [...prevData].reverse());
    };

    DataDisplay.toggleOrder = toggleOrder;
  
    return (
      <div class="data">
        {data.map(item => (
          <div class="bg-light-green individual-data" key={item.name}>
            <h4>{item.name}</h4>
            <p>Region: {item.region}</p>
            <p>Area: {item.area}</p>
          </div>
        ))}
      </div>
    );
  };

  export default DataDisplay;
  