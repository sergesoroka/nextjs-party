import RealizationStatusItem from './RealizationStatusItem';
import styles from './Table.module.css';

export default function RealizationStatus({ item }) {
  return (
    <>
      <span className={styles.mobileHeadings}>Реализація:</span>

      {item.in_whole && (
        <RealizationStatusItem
          title={item.title_ih}
          link={item.ih_link}
          in_whole={item.in_whole}
          comment={item.ih_comment}
          mark={item.ih_mark}
        />
      )}
      {item.in_whole1 && (
        <RealizationStatusItem
          title={item.title_ih1}
          link={item.ih_link1}
          in_whole={item.in_whole1}
          comment={item.ih_comment1}
          mark={item.ih_mark1}
        />
      )}
      {item.in_whole_2 && (
        <RealizationStatusItem
          title={item.title_ih2}
          link={item.ih_link2}
          in_whole={item.in_whole_2}
          comment={item.ih_comment2}
          mark={item.ih_mark2}
        />
      )}
      {item.in_whole_3 && (
        <RealizationStatusItem
          title={item.title_ih3}
          link={item.ih_link3}
          in_whole={item.in_whole_3}
          comment={item.ih_comment3}
          mark={item.ih_mark3}
        />
      )}
      {item.basis && (
        <RealizationStatusItem
          title={item.title_b}
          link={item.basis_link}
          in_whole={item.basis}
          comment={item.basis_comment}
          mark={item.basis_mark}
        />
      )}

      {item.basis1 && (
        <RealizationStatusItem
          title={item.title_b}
          link={item.basis_link1}
          in_whole={item.basis1}
          comment={item.basis_comment1}
          mark={item.basis_mark1}
        />
      )}

      {item.basis2 && (
        <RealizationStatusItem
          title={item.title_b}
          link={item.basis_link2}
          in_whole={item.basis2}
          comment={item.basis_comment2}
          mark={item.basis_mark2}
        />
      )}

      {item.registered && (
        <RealizationStatusItem
          title={item.title_r}
          link={item.r_link}
          in_whole={item.registered}
          comment={item.r_comment}
          mark={item.r_mark}
        />
      )}
    </>
  );
}
