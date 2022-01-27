import { useState } from 'react';
import styles from './Table.module.css';
import { dataSlugi } from '../data/slugi_program';
import { partyProgram } from '../data/party_program';
import {
  CheckOutlined,
  CloseOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import TableRow from './TableRow';
import FiltersProgress from './FiltersProgress';
import SelectParty from './SelectParty';
import SelectCategory from './SelectCategory';

export default function Table() {
  const [progress, setProgress] = useState('all');

  const renderedDataCatCurruption = dataSlugi.map(item => {
    if (progress === 'all') {
      return <TableRow item={item} />;
    }
    if (progress === 'done' && item.done) {
      return <TableRow item={item} />;
    }
    if (progress === 'not_done' && item.not_done) {
      return <TableRow item={item} />;
    }
    if (progress === 'in_progress' && item.in_progress) {
      return <TableRow item={item} />;
    }
  });

  return (
    <>
      <SelectParty />
      <FiltersProgress progress={progress} setProgress={setProgress} />
      <SelectCategory />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Пріоритети</th>
            <th>Що&nbsp;зробили</th>
            <th>Реалізація</th>
            {/* <th>За&nbsp;основу</th>
            <th>Зареєстрований</th> */}
          </tr>
        </thead>
        <tbody>{renderedDataCatCurruption}</tbody>
      </table>
    </>
  );
}
