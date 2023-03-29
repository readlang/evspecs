'use client'

import { useEffect, useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  Container,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

// defines the style properties in Mantine
const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
}));

// defines the row data & data types
interface RowData {
  brand: string;
  model: string;
  id: number;   
  trim: string;
  desc: string;
  msrp: number; 
  drive_type: string;
  engine: string;
  // fuel: string;
  hp: number;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

// Table Header Component
function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

// filters the table data based on the search text input field
function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys( data[0]).some((key) => item[key].toString().toLowerCase().includes(query))  // converts toString first to prevent crash on number columns
  );
}

// sorts the table data based on the column header sort arrows (and also calls the filter function)
function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  // if the sort arrows haven't been touched
  if (!sortBy) {
    return filterData(data, payload.search);
  }

  // if the sort arrows are activated
  return filterData(
    [...data].sort((a, b) => {

      if (payload.reversed) {
        console.log( typeof a[sortBy] )
        // Was getting error here, not sure if localeCompare is necessary
        // if (typeof b[sortBy] === "string" ) return b[sortBy].localeCompare(a[sortBy]);  
        // else 
        return ( a[sortBy] > b[sortBy] ? -1 : 1)
      } else {
        console.log( typeof a[sortBy] )
        // Was getting error here, not sure if localeCompare is necessary
        // if (typeof a[sortBy] === "string" ) return a[sortBy].localeCompare(b[sortBy]);  
        // else 
        return ( a[sortBy] > b[sortBy] ? 1 : -1)
      }
    }),
    payload.search
  );
}



export function TableSort({ data }: TableSortProps) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  console.log("Table Component data input: ", data.length)

  useEffect(() => {setSortedData(data)}, [data])

  // this handles a change to the sorting up/down arrows
  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  // this handles a change to the search text input box
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <tr key={row.id}>
      <td>{row.brand}</td>
      <td>{row.model}</td>
      <td>{row.id}</td>
      <td>{row.trim}</td>
      <td>{row.desc}</td>
      <td>{row.msrp}</td>
      <td>{row.drive_type}</td>
      <td>{row.engine}</td>
      <td>{row.hp}</td>
    </tr>
  ));

  // this does not update becuase 
  //console.log("rows data #: ", rows.length)
  console.log("sortedData Output #: ", sortedData.length)

  return (
    <Container size="xl">
    <ScrollArea h={800}>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <Th
              sorted={sortBy === 'brand'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('brand')}
            >
              Brand
            </Th>

            <Th
              sorted={sortBy === 'model'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('model')}
            >
              Model
            </Th>

            <Th
              sorted={sortBy === 'id'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('id')}
            >
              ID.
            </Th>

            <Th
              sorted={sortBy === 'trim'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('trim')}
            >
              Trim Level
            </Th>

            <Th
              sorted={sortBy === 'desc'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('desc')}
            >
              Description
            </Th>

            <Th
              sorted={sortBy === 'msrp'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('msrp')}
            >
              MSRP
            </Th>

            <Th
              sorted={sortBy === 'drive_type'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('drive_type')}
            >
              Drive Type
            </Th>

            <Th
              sorted={sortBy === 'engine'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('engine')}
            >
              Motor
            </Th>

            <Th
              sorted={sortBy === 'hp'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('hp')}
            >
              Horsepower
            </Th>

          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
    </Container>
  );
}