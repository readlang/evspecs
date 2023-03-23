'use client'

import { Button, Text, Collapse, SimpleGrid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FilterItem } from './FilterItem';

const filterList = [
  {
    title: "Max Price",
    type: "radio",
    options: ["Low", "Med", "High", "No Limit"]
  },
  {
    title: "Minimum Range",
    type: "radio",
    options: ["None", "200 mi", "250 mi", "300 mi"]
  }
]



export function FilterArea() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Button onClick={toggle}>Filter expand / collapse</Button>
      <Collapse in={opened}>
        <SimpleGrid cols={3}>
          
          
          {filterList.map( item => <FilterItem key={item.title} item={item}/> )}
        </SimpleGrid>
        <Text>
        </Text>
      </Collapse>
    </>
  );
}