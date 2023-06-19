import React, { useEffect, useState } from 'react';
import './index.css';
import DataDisplay from './DataDisplay';
import alphaSortImage from './img/alphaSort.png'

function SortButton() {
    const [showSmallCountries, setShowSmallCountries] = useState(false);
    const [showOceaniaCountries, setShowOceaniaCountries] = useState(false);

    const alphaSort = () => {
        DataDisplay.toggleOrder();
    } 

    const toggleSmallCountries = () => {
        DataDisplay.toggleSmallCountries();
        setShowSmallCountries(!showSmallCountries);
    }

    const toggleOceaniaCountries = () => {
        DataDisplay.toggleOceaniaCountries();
        setShowOceaniaCountries(!showOceaniaCountries);
      };

    return (
        <div class='buttons'>
            <button onClick={alphaSort}>
                <img src={alphaSortImage} alt="Alphabetical Sort Image" class="alpha-sort-image"></img>
                Sort
            </button>
            <button onClick={toggleSmallCountries}>
                {showSmallCountries ? 'Show All Countries' : 'Show Small Countries'}
            </button>
            <button onClick={toggleOceaniaCountries}>
                {showSmallCountries ? 'Show All Regions' : 'Show Oceania Region'}
            </button>
        </div>
    );
}

export default SortButton;