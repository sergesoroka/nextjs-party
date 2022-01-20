import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'sluga', label: 'Слуга народу' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'green',
    padding: 10
  }),

control: styles => (
    { ...styles, backgroundColor: '#fff', 
    borderRadius: '20px', 
    borderColor: '#fff',
    padding: '0 6px',
    margin: '0 0 20px 8px' }
),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
 
}

export default function SelectCategory() {
    const [selectedOption, setSelectedOption] = useState('Слуга народу');

  return (
    <div style={{width: '300px'}}>
      <Select
        styles={ customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={selectedOption}
      />
    </div>
  );
}
