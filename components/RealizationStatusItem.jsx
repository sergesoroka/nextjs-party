import Link from 'next/link';
import styles from './Table.module.css';

export default function RealizationStatusItem({
  title,
  link,
  in_whole,
  comment,
  mark
}) {
  return (
    <div>
      {title && <div style={{ marginTop: '8px' }}>{title}</div>}
      <span>
        {link && in_whole && (
          <Link href={link} passHref={true}>
            <a className={styles.ralitationLowLink}>{in_whole}</a>
          </Link>
        )}
      </span>
      &nbsp;&nbsp;
      {comment && (
        <span>
          <Link href={comment} passHref={true}>
            <a className={styles.ralitationCommentLink}>Коментари</a>
          </Link>
        </span>
      )}
      {mark && <div className={styles.ralitationStatus}>{mark}</div>}
    </div>
  );
}
