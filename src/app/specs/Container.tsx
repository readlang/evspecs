'use client'
import { createContext, useState } from 'react';
import { TableSort } from './Table';
import { FilterArea } from './filterComponents/FilterArea';

export const ContextStore = createContext<any>({});

function filterByPrice(carData: any, priceFilterValue: string) {
    let maxPrice = Infinity
    switch (priceFilterValue) {
        case "low":
            maxPrice = 38000
            break;
        case "med":
            maxPrice = 52000
            break;
        case "high":
            maxPrice = 80000
            break;
        default:
            maxPrice = Infinity
        break;
    }
    return carData.filter( (car: { msrp: number; }) => car.msrp <= maxPrice )
}

export default function Container({cleanCarData} :any) {
    const [theme, setTheme] = useState('light');
    const [priceFilterValue, setPriceFilterValue] = useState('none');

    const contextObj = {
        theme: theme, setTheme: setTheme,
        priceFilterValue: priceFilterValue, setPriceFilterValue: setPriceFilterValue,
    } 

    let filteredCarData = filterByPrice(cleanCarData, priceFilterValue)

    return(
        <ContextStore.Provider value={contextObj}>
            <FilterArea />
            <h4>{filteredCarData.length} unique model-trims returned</h4>
            <TableSort data = {filteredCarData} />
        </ContextStore.Provider>
    )
}