import { useState } from 'react';
import styles from './Table.module.css';
import TableRow from './TableRow';
import FiltersProgress from './FiltersProgress';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import CheckBox from './CheckBox';

export default function Table( {data} ) {
  const [progress, setProgress] = useState('all');
  const [category, setCategory] = useState('all');
  const [filtered, setFiltered] = useState([]);

  const filteredData = data.filter(note => {
    return filtered.includes(note.tag);
  });

  const handleFilters = (filters, category) => setFiltered([...filters]);
  const renderItems = filtered.length === 0 ? data : filteredData;
  
  const renderedData = renderItems.map(item => {
    if (progress === 'all') {
      return <TableRow item={item} category={category} key={item.id} />;
    }
    if (progress === 'done' && item.done) {
      return <TableRow item={item} category={category} key={item.id} />;
    }
    if (progress === 'not_done' && item.not_done) {
      return <TableRow item={item} category={category} key={item.id} />;
    }
    if (progress === 'in_progress' && item.in_progress) {
      return <TableRow item={item} category={category} key={item.id} />;
    }
  });

  return (
    <>
      {/* <SelectParty /> */}
      <ScrollUpButton 
      AnimationDuration={500}
      style={{fill: '#4a4a4a', border: 'none', outline: 'none', width: '30px', height: '30px'}}/>
      <FiltersProgress progress={progress} setProgress={setProgress} />
      <CheckBox handleFilters={filters => handleFilters(filters, 'category')} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Пріоритети</th>
            <th>Що&nbsp;зробили</th>
            <th>Реализація</th>
          </tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </>
  );
}
