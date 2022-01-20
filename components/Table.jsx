import { useState } from 'react';
import styles from './Table.module.css';
import { dataSlugi } from '../data/slugi_program';
import { partyProgram } from '../data/party_program';
import { CheckOutlined, CloseOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import TableRow from './TableRow'
import FiltersProgress from './FiltersProgress'
import SelectCategory from './SelectCategory'

export default function Table() {
  const [progress, setProgress] = useState('all');

  const renderData = partyProgram.map(item => {
    if (progress === 'all') {
      return ( <TableRow item={item}/> );
    }
    if (progress === 'done' && item.done) {
      return ( <TableRow item={item}/> );
    }
    if (progress === 'not_done' && item.not_done) {
      return ( <TableRow item={item}/> );
    }
    if (progress === 'in_progress' && item.in_progress) {
      return ( <TableRow item={item}/> );
    }
  });

  const renderCategory = partyProgram.map(item => {
    return (<li key={item.id}>{item.category}</li>)
  });

  

  return (
    <>
      <SelectCategory />
      <FiltersProgress progress={progress} setProgress={setProgress}/>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Пріоритети</th>
            <th>Що&nbsp;зробили</th>
            <th>В&nbsp;цілому</th>
            <th>За&nbsp;основу</th>
            <th>Зареєстрований</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </>
  );
}
