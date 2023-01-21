/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './App.scss';
import { Table } from './Table';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

function App() {
  const filterItems = [
    {label: 'ID', value: 'id'},
    {label: 'Name', value: 'name'},
    {label: 'Weight', value: 'weight'},
    {label: 'Price', value: 'price'},
    {label: 'Count', value: 'count'}
];

const filtersArr = [
  {
    field: 'name',
    header: 'name'
  },
  {
    field: 'count',
    header: 'Count'
  },
  {
    field: 'price',
    header: 'Price'
  },
  {
    field: 'id',
    header: 'ID'
  },
  {
    field: 'weight',
    header: 'Weight'
  }
]

const [filters, setFilters] = React.useState(
  [
  {
    field: 'name',
    header: 'name'
  },
  {
    field: 'count',
    header: 'Count'
  },
  {
    field: 'price',
    header: 'Price'
  }
]);

const [filter, setFilter] = useState();

const addFilter = React.useCallback(() => {
  const newFilter = filtersArr.find((el) => el.field === filter);
  if (newFilter && filters.every(el => el.field !== filter)) {
    setFilters([...filters, newFilter]);
  }
}, [filter]);

const removeFilter = React.useCallback(() => {
  if (filters.some(el => el.field === filter)) {
    setFilters(prev => [...prev].filter(el => el.field !== filter));
  }
}, [filter]);

  return (
    <div className="App">
      <Dropdown 
        value={filter} 
        options={filterItems} 
        onChange={(e) => setFilter(e.value)} 
        placeholder="Select a filter"
      />
      <Button 
        onClick={(e) => {
          e.preventDefault();
          addFilter();
        }}
      >
        Add filter
      </Button>
      <Button 
        onClick={(e) => {
          removeFilter();
        }}
      >
        Remove filter
      </Button>
      <Table filters={filters}/>
    </div>
  );
}

export default App;
