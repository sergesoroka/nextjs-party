import Link from 'next/link';
import styles from './Table.module.css';

export default function RealizationStatus({ item }) {
  return (
    <>
      <span className={styles.mobileHeadings}>Реализація:</span>
      <div>Прінято закон</div>
      <>
        <span>
          <Link href={item.ih_link1} passHref={true}>
            <a className={styles.ralitationLowLink}>{item.in_whole}</a>
          </Link>
        </span>
        &nbsp;&nbsp;
        <span>
          <Link href={item.ih_comment1} passHref={true}>
            <a className={styles.ralitationCommentLink}>Коментари</a>
          </Link>
        </span>
        <div className={styles.ralitationStatus}>{item.ih_mark1}</div>
      </>

      <>
        {item.in_whole_2 && (
          <div>
            <span>
              <Link href={item.ih_link2} passHref={true}>
                <a className={styles.ralitationLowLink}>{item.in_whole_2}</a>
              </Link>
            </span>
            &nbsp;&nbsp;
            <span>
              <Link href={item.ih_comment2} passHref={true}>
                <a className={styles.ralitationCommentLink}>Коментари</a>
              </Link>
            </span>
            <div className={styles.ralitationStatus}>{item.ih_mark2}</div>
          </div>
        )}
      </>

      <>
        {item.in_whole_3 && (
          <div>
            <span>
              <Link href={item.ih_link3} passHref={true}>
                <a className={styles.ralitationLowLink}>{item.in_whole_3}</a>
              </Link>
            </span>
            &nbsp;&nbsp;
            <span>
              <Link href={item.ih_comment3} passHref={true}>
                <a className={styles.ralitationCommentLink}>Коментари</a>
              </Link>
            </span>
            <div className={styles.ralitationStatus}>{item.ih_mark3}</div>
          </div>
        )}
      </>

      <>
        {item.in_whole_4 && (
          <div>
            <span>
              <Link href={item.ih_link4} passHref={true}>
                <a className={styles.ralitationLowLink}>{item.in_whole_4}</a>
              </Link>
            </span>
            &nbsp;&nbsp;
            <span>
              <Link href={item.ih_comment4} passHref={true}>
                <a className={styles.ralitationCommentLink}>Коментари</a>
              </Link>
            </span>
            <div className={styles.ralitationStatus}>{item.ih_mark4}</div>
          </div>
        )}
      </>
    </>
  );
}
