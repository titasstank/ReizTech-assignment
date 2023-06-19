import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [isReversed, setIsReversed] = useState(false);
    const [showSmallCountries, setShowSmallCountries] = useState(false);
    const [showOceaniaRegion, setShowOceaniaRegion] = useState(false);

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


    const toggleSmallCountries = () => {
      setShowSmallCountries(!showSmallCountries);
    };

    const toggleOceaniaRegion = () => {
      setShowOceaniaRegion(!showOceaniaRegion);
    };


    const getLithuaniaArea = () => {
      const lithuania = data.find(item => item.name === 'Lithuania');
      return lithuania ? lithuania.area : 0;
    };

    const filteredData = data.filter(item => {
      const isSmallCountry = showSmallCountries ? item.area < getLithuaniaArea() : true;
      const isOceaniaCountry = showOceaniaRegion ? item.region === 'Oceania' : true;
      return isSmallCountry && isOceaniaCountry;
    });


    /* Setting Static Const*/
    DataDisplay.toggleOrder = toggleOrder;
    DataDisplay.toggleSmallCountries = toggleSmallCountries;
    DataDisplay.toggleOceaniaRegion = toggleOceaniaRegion;

  
    return (
      <div className="data">
      {filteredData.map(item => (
        <div className="bg-light-green individual-data" key={item.name}>
          <h4>{item.name}</h4>
          <p>Region: {item.region}</p>
          <p>Area: {item.area}</p>
        </div>
      ))}
      </div>
    );
  };

  export default DataDisplay;
  