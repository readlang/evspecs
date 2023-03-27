'use client'

import { useState, useId } from 'react';
import { Radio, Space } from '@mantine/core';

export function FilterRange() {
  const [value, setValue] = useState('none');

    return (
        <Radio.Group 
            value={value}
            onChange={setValue}
            name="range"
            label="Range"
            description="Select the minimum Range"
        >    <Space h="xs" />
            <Radio value="none" label="No Minimum" id={useId()} /> <Space h="xs" />
            <Radio value="200 mi" label="200 mi" id={useId()} /> <Space h="xs" />
            <Radio value="250 mi" label="250 mi" id={useId()} /> <Space h="xs" />
            <Radio value="300 mi" label="300 mi" id={useId()} /> 
        </Radio.Group>
    );
}