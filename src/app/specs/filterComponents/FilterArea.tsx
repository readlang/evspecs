'use client'
import { ContextStore } from '../Container';

import { useContext } from 'react';
import { Button, Text, Collapse, SimpleGrid, Space, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FilterPrice } from './FilterPrice';
import { FilterRange } from './FilterRange';
import { FilterSize } from './FilterSize';

export function FilterArea() {
  const [opened, { toggle }] = useDisclosure(false);

  const contextObj = useContext(ContextStore);

  return (
    <div>
      <Button onClick={toggle}>Filter expand / collapse</Button> <Space h="xs" />
      <Collapse in={opened}>
        <Paper shadow="xs" radius="md" p="xl" withBorder>
          <SimpleGrid cols={3}>
            <FilterPrice />
            <FilterRange />
            <FilterSize />
            <Button onClick={()=> contextObj.setTheme(contextObj.theme === "light" ? "dark" : "light") }>set theme</Button>
          </SimpleGrid>
        </Paper>
      </Collapse>
    </div>
  );
}