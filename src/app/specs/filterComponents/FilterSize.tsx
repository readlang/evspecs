'use client'

import { useState, useId } from 'react';
import { Checkbox, Space } from '@mantine/core';

export function FilterSize() {
  const [value, setValue] = useState<string[]>(["Compact", "Medium", "Large", "XLarge"]);

  console.log(value)

    return (
        <Checkbox.Group 
            value={value}
            onChange={setValue}
            
            label="Size"
            description="Select the EV Size"
        >    <Space h="xs" />
            <Checkbox value="Compact" label="Compact" id={useId()} /> <Space h="xs" />
            <Checkbox value="Medium" label="Medium" id={useId()} /> <Space h="xs" />
            <Checkbox value="Large" label="Large" id={useId()} /> <Space h="xs" />
            <Checkbox value="XLarge" label="XLarge" id={useId()} /> 
        </Checkbox.Group>
    );
}