import React, { useState } from 'react';
import Select from 'react-select';
import styles from './Table.module.css';

const options = [
  { value: 'sluga', label: 'Слуга народу', color: "#498205" },
  { value: 'es', label: 'Європейська солідарність' },
  { value: 'op', label: 'ОПЗЖ' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#F65329' : 'transperent',
    color: state.isSelected ? 'white' : '#000',
    borderRadius: '14px',
    padding: 10,
    
  }),
  dropdownIndicator: base => ({
    ...base,
    color: "#000" // Custom colour
  }),
  menu: base => ({
      ...base,
      backgroundColor: '#fff',
      borderRadius: '4px',
      padding: '0'
  }),

control: styles => (
    { ...styles, backgroundColor: '#fff', 
    borderRadius: '20px', 
    borderColor: '#fff',
    padding: '0 6px',
    margin: '0 0 20px 8px',
    "&:hover": {
        borderColor: "red",
        color: "red"
      }
       }
),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    
    const transition = 'opacity 300ms';
    const color = '#000'

    return { ...provided, opacity, transition, color };
  },
  
 
}

export default function SelectCategory() {
    const [selectedOption, setSelectedOption] = useState('Слуга народу');

  return (
    <div className={styles.selectContainer} style={{width: '300px'}}>
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
