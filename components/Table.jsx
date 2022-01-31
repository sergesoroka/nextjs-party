import { useState } from 'react';
import styles from './Table.module.css';
import {
  CheckOutlined,
  CloseOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import TableRow from './TableRow';
import FiltersProgress from './FiltersProgress';
import SelectParty from './SelectParty';
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
      <FiltersProgress progress={progress} setProgress={setProgress} />
      <CheckBox handleFilters={filters => handleFilters(filters, 'category')} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Пріоритети</th>
            <th>Що&nbsp;зробили</th>
            <th>Реалізація</th>
          </tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </>
  );
}
