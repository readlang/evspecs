'use client'
import { Radio, Group } from '@mantine/core';
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from 'react';

export function FilterItem({item}:any) {
    console.log(item)

    return (
        <div>
           <h4>{item.title}</h4> 
            <Radio.Group
                name="favoriteFramework"
                label="Select your maximum price range"
                description="further description"
            >
                <Group mt="xs">
                    {item.options.map( (option: any ) =>  <Radio key={option} value={option} label={option} /> )}
                    
                </Group>
            </Radio.Group>
        </div>

    )
}

// there is an error with the radio buttons - 