import React, { useEffect, useState } from 'react';
import './index.css';
import DataDisplay from './DataDisplay';
import alphaSortImage from './img/alphaSort.png'

function SortButton() {
    const alphaSort = () => {
        DataDisplay.toggleOrder();
        console.log('Button pressed!');
    } 

    const areaSizeSort = () => {
        console.log("Sort by area clicked");
    }

    return (
        <div class='buttons'>
            <button onClick={alphaSort}>
                <img src={alphaSortImage} alt="Alphabetical Sort Image" class="alpha-sort-image"></img>
                Sort
            </button>
            <button onClick={areaSizeSort}>Area &lt; Lithuania</button>
        </div>
    );
}

export default SortButton;