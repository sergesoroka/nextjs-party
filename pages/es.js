import React from 'react';
import Table from '../components/Table';
import D3BarsPage from '../components/D3BarsPage';
import { esPromises } from '../data/es_promises.js';
import styles from '../styles/Home.module.css';

export default function slugi() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <D3BarsPage done={9} not_done={10} in_progress={8} all={27} party={'ЄС'}/>
          <Table data={esPromises} />
        </div>
      </main>
    </div>
  );
}
