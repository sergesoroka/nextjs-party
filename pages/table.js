import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Table from '../components/Table';
import ToggleList from '../components/Toggle/ToggleList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.container}>
        <Head>
          <title>Програми та обіцянки політичних партій</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            {/* <ToggleList /> */}
            <Table />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            VOX Ukraine
            <span className={styles.logo}></span>
          </a>
        </footer>
      </div>
    </>
  );
}
