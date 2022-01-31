import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import styles from '../styles/Home.module.css';

export default function PieChartComp({data, title}) {

const dataDone = data.map(item => item.done).filter(it => it > 0).length
const dataNotDone = data.map(item => item.not_done).filter(it => it > 0).length;
const dataInProgress = data.map(item => item.in_progress).filter(it => it > 0).length;

  const dataSlugi = [
    { name: 'Done', value: 47.3, fill: '#009f08', stroke: 'none' },
    { name: 'Not Done', value: 20.3, fill: '#ff4716', stroke: 'none' },
    { name: 'In Progress', value: 32.4, fill: '#ffd500', stroke: 'none' }
  ];
  return (
    <>
    
    <div style={{width: '280px'}}>
      <h3 className={styles.chartHeading}>{title}</h3>
        <PieChart width={200} height={300}>
          <Pie
            dataKey='value'
            data={dataSlugi}
            cx={120}
            cy={140}
            innerRadius={30}
            outerRadius={60}
            fill='#F65329'
            label
          />
          {/* <Tooltip /> */}
        </PieChart>
    </div>
  </>
  );
}
