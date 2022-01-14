import { useState } from 'react';
import styles from './ToggleList.module.css';

export default function ToggleItem({ note }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      key={note.id}
      className={styles.row}
      onClick={() => setToggle(!toggle)}
    >
      {note.priority}
      {toggle ? (
        <div className={styles.discription}>
          {note.what_done ? (
            <p>
              <span className={styles.emph}>Що зробили: </span>
              {note.what_done}
            </p>
          ) : null}
          {note.in_whole ? (
            <p>
              <span className={styles.emph}>В цілому: </span>
              {note.in_whole}
            </p>
          ) : null}
          {note.category ? (
            <p className={styles.category}>{note.category}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
