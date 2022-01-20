import React from 'react'
import { CheckOutlined, CloseOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styles from './Table.module.css';

export default function TableRow({item}) {
    return (
        <tr className={styles.tableRow} key={item.priority}>
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.done && <CheckOutlined style={{color: '#00980F', fontSize: '16px'}}/> ||
            item.not_done && <CloseOutlined style={{color: '#F65329', fontSize: '16px'}}/> ||
            item.in_progress && <ClockCircleOutlined style={{color: '#FFB800', fontSize: '16px'}}/>
            }
          </td>
          <td><span className={styles.mobileHeadings}>Пріоритети:&nbsp;</span>{item.priority}</td>
          <td><span className={styles.mobileHeadings}>Що&nbsp;зробили&nbsp;</span>{item.what_done}</td>
          <td><span className={styles.mobileHeadings}>В&nbsp;цілому&nbsp;</span>{item.in_whole}</td>
          <td><span className={styles.mobileHeadings}>За&nbsp;основу&nbsp;</span>{item.basis}</td>
          <td><span className={styles.mobileHeadings}>Зареєстрований&nbsp;</span>{item.registered}</td>
        </tr>
    )
}

