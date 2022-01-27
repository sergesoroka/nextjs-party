import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

export default function PieChartComp() {
  const data02 = [
    { name: 'Group A', value: 2400, fill: '#F65329' },
    { name: 'Group B', value: 4567, fill: '#00980F' },
    { name: 'Group C', value: 1398, fill: '#FFB800' }
  ];
  return (
    <PieChart width={400} height={220}>
      <Pie
        dataKey='value'
        data={data02}
        cx={100}
        cy={80}
        innerRadius={60}
        outerRadius={80}
        fill='#F65329'
      />
      <Tooltip />
    </PieChart>
  );
}
