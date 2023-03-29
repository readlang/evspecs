'use client'
import { ContextStore } from '../Container';
import { useId, useContext } from 'react';
import { Radio, Space } from '@mantine/core';

export function FilterPrice() {
  const contextObj = useContext(ContextStore);

    return (
        <Radio.Group 
            value={contextObj.priceFilterValue}
            onChange={contextObj.setPriceFilterValue}
            name="price"
            label="Price"
            description="Select the maximum price"
        >    <Space h="xs" />
            <Radio value="low" label="Low ( 38k )" id={useId()} /> <Space h="xs" />
            <Radio value="med" label="Med ( 52k )" id={useId()} /> <Space h="xs" />
            <Radio value="high" label="High ( 80k )" id={useId()} /> <Space h="xs" />
            <Radio value="none" label="No Limit" id={useId()} /> 
        </Radio.Group>
    );
}