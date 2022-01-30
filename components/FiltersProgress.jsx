import styles from './Table.module.css';
import { CheckOutlined, CloseOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';

export default function FiltersProgress({progress, setProgress}) {

    return (
        <div className={styles.btnGroup}>

        <button
          className={progress === 'all' ? styles.btnAllActive : styles.btnAll}
          onClick={() => setProgress('all')}
        >
          <UnorderedListOutlined 
            style={progress === 'all' ? {color: '#FFFFFF', fontSize: '16px'}: {color: '#ccc', fontSize: '16px'}} />
          <span style={{display: 'inline-block', marginLeft: '8px'}}>Всі</span>
        </button>
        <button
          className={
            progress === 'done' ? styles.btnDoneActive : styles.btnDone
          }
          onClick={() => setProgress('done')}
        >
          <CheckOutlined style={progress === 'done' ? {color: '#00980F', fontSize: '16px'}: {color: '#ccc', fontSize: '16px'}}/>
          <span style={{display: 'inline-block', marginLeft: '8px'}}>Виконано</span>
          
        </button>
        <button
          className={
            progress === 'not_done'
              ? styles.btnNotDoneActive
              : styles.btnNotDone
          }
          onClick={() => setProgress('not_done')}
        >
          <CloseOutlined style={progress === 'not_done' ? {color: '#F65329', fontSize: '16px'}: {color: '#ccc', fontSize: '16px'}} />
          <span style={{display: 'inline-block', marginLeft: '8px'}}>Не виконано</span>
        </button>
        <button
          className={
            progress === 'in_progress'
              ? styles.btnInProgressActive
              : styles.btnInProgress
          }
          onClick={() => setProgress('in_progress')}
        >
          <ClockCircleOutlined style={progress === 'in_progress' ? {color: '#ffd500', fontSize: '16px'}: {color: '#ccc', fontSize: '16px'}} />
          <span style={{display: 'inline-block', marginLeft: '8px'}}>В процесі</span>
        </button>
      </div>
    )
}
