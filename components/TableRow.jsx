import React from 'react'
import { CheckOutlined, CloseOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import DoneIcon from '../icons/done.svg'
import NotDoneIcon from '../icons/not-done.svg'
import InProgressIcon from '../icons/in-progress.svg'
import styles from './Table.module.css';

export default function TableRow({item, category}) {
  
 

 
    return (
      
        <tr className={styles.tableRow} >
          <td
            className={
              (item.done && styles.markerDone) ||
              (item.not_done && styles.markerNotDone) ||
              (item.in_progress && styles.markerInProgress)
            }
          >
            {item.done && <DoneIcon /> ||
            item.not_done && <NotDoneIcon /> ||
            item.in_progress && <InProgressIcon />
            }
          </td>
          <td>{item.tag}</td>
          <td><span className={styles.mobileHeadings}>Пріоритети:&nbsp;</span>{item.priority}</td>
          <td><span className={styles.mobileHeadings}>Що&nbsp;зробили&nbsp;</span>{item.what_done}</td>
          <td><span className={styles.mobileHeadings}>В&nbsp;цілому&nbsp;</span>{item.in_whole}</td>
          
        </tr>
    )
}

