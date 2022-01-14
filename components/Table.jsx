import { useState } from 'react';
import styles from './Table.module.css';
import { dataSlugi } from '../data/slugi_program';
import { partyProgram } from '../data/party_program';

export default function Table() {
  const [progress, setProgress] = useState('all');

  const renderData = partyProgram.map(item => {
    if (progress === 'all') {
      return (
        <tr className={styles.tableRow} key={item.priority}>
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.id}
          </td>
          <td>{item.priority}</td>
          <td>{item.what_done}</td>
          <td>{item.in_whole}</td>
          <td>{item.basis}</td>
          <td>{item.registered}</td>
        </tr>
      );
    }
    if (progress === 'done' && item.done) {
      return (
        <tr className={styles.tableRow} key={item.priority}>
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.id}
          </td>
          <td>{item.priority}</td>
          <td>{item.what_done}</td>
          <td>{item.in_whole}</td>
          <td>{item.basis}</td>
          <td>{item.registered}</td>
        </tr>
      );
    }
    if (progress === 'not_done' && item.not_done) {
      return (
        <tr className={styles.tableRow} key={item.priority}>
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.id}
          </td>
          <td>{item.priority}</td>
          <td>{item.what_done}</td>
          <td>{item.in_whole}</td>
          <td>{item.basis}</td>
          <td>{item.registered}</td>
        </tr>
      );
    }
    if (progress === 'in_progress' && item.in_progress) {
      return (
        <tr className={styles.tableRow} key={item.priority}>
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.id}
          </td>
          <td>{item.priority}</td>
          <td>{item.what_done}</td>
          <td>{item.in_whole}</td>
          <td>{item.basis}</td>
          <td>{item.registered}</td>
        </tr>
      );
    }
  });

  return (
    <>
      <div className={styles.btnGroup}>
        <button
          className={progress === 'all' ? styles.btnAllActive : styles.btnAll}
          onClick={() => setProgress('all')}
        >
          Всі
        </button>
        <button
          className={
            progress === 'done' ? styles.btnDoneActive : styles.btnDone
          }
          onClick={() => setProgress('done')}
        >
          Виконано
        </button>
        <button
          className={
            progress === 'not_done'
              ? styles.btnNotDoneActive
              : styles.btnNotDone
          }
          onClick={() => setProgress('not_done')}
        >
          Не виконано
        </button>
        <button
          className={
            progress === 'in_progress'
              ? styles.btnInProgressActive
              : styles.btnInProgress
          }
          onClick={() => setProgress('in_progress')}
        >
          В процесі
        </button>
      </div>
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
