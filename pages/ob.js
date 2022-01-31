import React from 'react';
import Table from '../components/Table';
import { dataSlugi } from '../data/slugi_program';
import styles from '../styles/Home.module.css';

export default function slugi() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Table data={dataSlugi}/>
          </div>
        </main>
    </div>
    )
}