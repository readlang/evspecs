'use client'

import { useState, useId } from 'react';
import { Radio, Space } from '@mantine/core';

export function FilterPrice() {
  const [value, setValue] = useState('none');

    return (
        <Radio.Group 
            value={value}
            onChange={setValue}
            name="price"
            label="Price"
            description="Select the maximum price"
        >    <Space h="xs" />
            <Radio value="low" label="Low" id={useId()} /> <Space h="xs" />
            <Radio value="med" label="Med" id={useId()} /> <Space h="xs" />
            <Radio value="high" label="High" id={useId()} /> <Space h="xs" />
            <Radio value="none" label="No Limit" id={useId()} /> 
        </Radio.Group>
    );
}