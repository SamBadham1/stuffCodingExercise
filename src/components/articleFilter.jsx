import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Box } from '@mui/system';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

let filterValues = [];
export default function ArticleFilter({
  articles,
  onFilterChange,
  onSortOrderChange,
}) {
  filterValues = [...new Set(articles.map((a) => a.story.section))];
  const [filterName, setFilter] = React.useState([]);
  const [order, setOrder] = React.useState('asc');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(
      // On autofill we get a stringified value.

      typeof value === 'string' ? value.split(',') : value
    );
    onFilterChange(value);
  };

  const sortByChange = () => {
    if (order === 'asc') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }

    onSortOrderChange(order);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Filter By</InputLabel>
        <Select
          multiple
          value={filterName}
          onChange={handleChange}
          input={<OutlinedInput label="Filter By" />}
          MenuProps={MenuProps}
        >
          {filterValues.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableSortLabel active={true} direction={order} onClick={sortByChange}>
        <Box component="span">
          {order === 'asc' ? ' Sorted by Most recent' : 'Sorted by oldest'}
        </Box>
      </TableSortLabel>
    </div>
  );
}
