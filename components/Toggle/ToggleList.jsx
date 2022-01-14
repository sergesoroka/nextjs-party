import { useState } from 'react';
import { partyProgram } from '../../data/party_program';
import ToggleItem from './ToggleItem';
import styles from '../Table.module.css';

export default function ToggleList() {
  const [progress, setProgress] = useState('all');
  const renderData = partyProgram.map(note => {
    if (progress === 'all') {
      return <ToggleItem note={note} key={note.id} />;
    }
    if (progress === 'done' && note.done) {
      return <ToggleItem note={note} key={note.id} />;
    }
    if (progress === 'not_done' && note.not_done) {
      return <ToggleItem note={note} key={note.id} />;
    }
    if (progress === 'in_progress' && note.in_progress) {
      return <ToggleItem note={note} key={note.id} />;
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
      {renderData}
    </>
  );
}
