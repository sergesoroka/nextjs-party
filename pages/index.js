import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Table from '../components/Table';
import PieChart from '../components/PieChart';
import BarChartComp from '../components/BarChartComp';
import { dataSlugi } from '../data/slugi_program';
import { partyProgram } from '../data/party_program';
import styles from '../styles/Home.module.css';


import Link from 'next/link' 

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Програми та обіцянки політичних партій</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <BarChartComp />
        {/* <div style={{display: 'flex', marginTop: '60px', justifyContent: 'center'}}>
          <PieChart data={partyProgram} title={'Слуга народу'}/>
          <PieChart data={partyProgram} title={'Європейська Солідарність'}/>
          <PieChart data={partyProgram} title={'Батьківщина'}/>
          <PieChart data={partyProgram} title={'ОБЗЖ'}/>
          <PieChart data={partyProgram} title={'Голос'}/>
        </div> */}
         <ul style={{display: 'flex'}}>
          <li style={ {color: '#009f08'}}>Виконано</li>
          <li style={ {color: '#ff4716', marginLeft: '40px'}}>Не виконано</li>
          <li style={ {color: '#ffd500', marginLeft: '40px'}}>В процесі</li>
        </ul>
      </div>
    </>
  );
}
