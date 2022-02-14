import Head from 'next/head';
import D3Bars from '../components/D3Bars';
import D3BarsMainPage from '../components/D3BarsMainPage'
import styles from '../styles/Home.module.css';


export default function Home() {
  
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Програми та обіцянки політичних партій</title>
          <meta name='description' content='Generated by create next app' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div>     
        <D3Bars />
        </div>
      </div>
    </>
  );
}
