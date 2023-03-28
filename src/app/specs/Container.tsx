'use client'

import { createContext, useState } from 'react';

import { TableSort } from './Table';
import { FilterArea } from './filterComponents/FilterArea';

export const ContextStore = createContext<any>({});

export default function Container({cleanCarData} :any) {
    const [theme, setTheme] = useState('light');

    const contextObj = {theme: theme, setTheme: setTheme} // add any new state variables to this object

    return(
        <ContextStore.Provider value={contextObj}>
            <FilterArea />
            <h4>{cleanCarData.length} unique model-trims returned</h4>
            <TableSort data = {cleanCarData} />
        </ContextStore.Provider>
    )
}