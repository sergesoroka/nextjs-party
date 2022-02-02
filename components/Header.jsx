import Link from 'next/link'
import { useRouter } from 'next/router'
import Vlada from '../icons/icons8-parliament.svg';
import Logo from '../icons/logo.svg'
import styles from '../styles/Home.module.css';

export default function Header() {
  const router = useRouter()
  const partyName = router.pathname === '/slugi' && 'Слуга народу' ||
  router.pathname === '/es' && 'Європейська Солідарність' ||
  router.pathname === '/batkivshina' && 'Батьківщина' ||
  router.pathname === '/ob' && 'ОБЗЖ' ||
  router.pathname === '/golos' && 'Голос' 
  
  return (
    <div className={styles.header}>
    <Link href="https://voxukraine.org/"><Logo style={{fill: '#ccc', marginTop: '1rem', cursor: 'pointer'}}/></Link>
    {router.pathname === '/' ? 
    <>
      <Link href="/">
        <h1 className={styles.title}>Партійні справи</h1>
      </Link>
        <h2 className={styles.subtitle}>Як політичні партії виконують власні програми</h2>
        <p className={styles.discription}>«Вокс» уважно прочитав програми найбільших політичних партій України, та перевірив, як вони виконують свої обіцянки</p>
        </>
        : 
        <h2 className={styles.subtitleParty}>Як «{partyName}» виконує свої передвиборчі обіцянки</h2> }
    <div>
    {router.pathname !== '/' ? 
      <Link href="/">
          <button className={router.pathname === '/' ? styles.linkMenuActive : styles.linkMenu} >Всі партії</button>
      </Link> : null }
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
