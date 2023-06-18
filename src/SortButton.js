import React, { useEffect, useState } from 'react';
import './index.css';
import DataDisplay from './DataDisplay';
import alphaSortImage from './img/alphaSort.png'

function SortButton() {
    const alphaSort = () => {
        DataDisplay.toggleOrder();
        console.log('Button pressed!');
    } 

    return (
        <button onClick={alphaSort}>
            <img src={alphaSortImage} alt="Alphabetical Sort Image" class="alpha-sort-image"></img>
            Sort
            </button>
    );
}

export default SortButton;