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
          <D3BarsPage done={16} not_done={17} in_progress={21} all={54} />
          <Table data={esPromises} />
        </div>
      </main>
    </div>
  );
}
