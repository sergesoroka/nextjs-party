import React from 'react';
import Table from '../components/Table';
import D3BarsPage from '../components/D3BarsPage';
import { slugiPromises } from '../data/slugi_promises.js';
import styles from '../styles/Home.module.css';

export default function slugi() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
      
          <D3BarsPage done={26} not_done={17} in_progress={31} all={74} party={'Слуга народу'}/>
          <Table data={slugiPromises} />
        </div>
      </main>
    </div>
  );
}
