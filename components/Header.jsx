import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';

export default function Header() {
  const router = useRouter()

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Партійні справи</h1>
      <h2 className={styles.subtitle}>Як політичні партії виконують власні програми</h2>
    <div>
    <Link href="/">
          <button className={router.pathname === '/' ? styles.linkMenuActive : styles.linkMenu} >Home</button>
      </Link>
      <Link href="/slugi">
          <button className={router.pathname === '/slugi' ? styles.linkMenuActive : styles.linkMenu} >Слуга народу</button>
      </Link>
      <Link href="/es">
          <button className={router.pathname === '/es' ? styles.linkMenuActive : styles.linkMenu} >Європейська Солідарність</button>
      </Link>
      <Link href="/batkivshina">
          <button className={router.pathname === '/batkivshina' ? styles.linkMenuActive : styles.linkMenu} >Батьківщина</button>
      </Link>
      <Link href="/ob">
          <button className={router.pathname === '/ob' ? styles.linkMenuActive : styles.linkMenu} >ОБЗЖ</button>
      </Link>
      <Link href="/golos">
          <button className={router.pathname === '/golos' ? styles.linkMenuActive : styles.linkMenu} >Голос</button>
      </Link>
      
      </div>
    </div>
  );
}
