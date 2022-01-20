import styles from './Table.module.css';
import { CheckOutlined, CloseOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';

export default function FiltersProgress({progress, setProgress}) {
    return (
        <div className={styles.btnGroup}>

        <button
          className={progress === 'all' ? styles.btnAllActive : styles.btnAll}
          onClick={() => setProgress('all')}
        >
          <span style={{display: 'inline-block', marginRight: '8px'}}>Всі</span>
          <UnorderedListOutlined 
            style={progress === 'all' ? {color: '#1B1B1B', fontSize: '16px'}: {color: '#FFFFFF', fontSize: '16px'}} />
        </button>
        <button
          className={
            progress === 'done' ? styles.btnDoneActive : styles.btnDone
          }
          onClick={() => setProgress('done')}
        >
          <span style={{display: 'inline-block', marginRight: '8px'}}>Виконано</span>
          <CheckOutlined style={progress === 'done' ? {color: '#00980F', fontSize: '16px'}: {color: '#FFFFFF', fontSize: '16px'}}/>
          
        </button>
        <button
          className={
            progress === 'not_done'
              ? styles.btnNotDoneActive
              : styles.btnNotDone
          }
          onClick={() => setProgress('not_done')}
        >
          <span style={{display: 'inline-block', marginRight: '8px'}}>Не виконано</span>
          <CloseOutlined style={progress === 'not_done' ? {color: '#F65329', fontSize: '16px'}: {color: '#FFFFFF', fontSize: '16px'}} />
        </button>
        <button
          className={
            progress === 'in_progress'
              ? styles.btnInProgressActive
              : styles.btnInProgress
          }
          onClick={() => setProgress('in_progress')}
        >
          <span style={{display: 'inline-block', marginRight: '8px'}}>В процесі</span>
          <ClockCircleOutlined style={progress === 'in_progress' ? {color: '#FFB800', fontSize: '16px'}: {color: '#FFFFFF', fontSize: '16px'}} />
        </button>
      </div>
    )
}
