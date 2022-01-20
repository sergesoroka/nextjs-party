import { useState } from 'react';
import styles from './ToggleList.module.css';

export default function ToggleItem({ note }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      key={note.id}
      className={styles.row}
      onClick={() => setToggle(!toggle)}
    >
      {note.done ? <div className={styles.labelDone}>&nbsp;</div> : null}
      {note.not_done ? (
        <div className={styles.labelNotDone}>&nbsp;</div>
      ) : null}
      {note.in_progress ? (
        <div className={styles.labelProgress}>&nbsp;</div>
      ) : null}

      

      <div className={styles.rowItem}>
        <div style={{width: '520px'}}>{note.priority}</div>
        <div style={{width: '520px'}}>{note.what_done}</div>
        <div style={{width: '120px'}}>{note.in_whole}</div>
        <div style={{width: '120px'}}>{note.basis}</div>
        <div style={{width: '120px'}}>{note.registered}+</div>
      </div>    
    </div>
  );
}
