import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Слуга народу",
    uv: 100,
    done: 47.3,
    not_done: 20.3,
    in_progress: 32.4
  },
  {
    name: "ЄС",
    uv: 100,
    done: 37.3,
    not_done: 40.3,
    in_progress: 32.4
  },
  {
    name: "Батьківщина",
    uv: 100,
    done: 17.3,
    not_done: 50.3,
    in_progress: 42.4
  },

  {
    name: "ОБЗЖ",
    uv: 100,
    done: 37.3,
    not_done: 40.3,
    in_progress: 32.4
  },
  {
    name: "Голос",
    uv: 100,
    done: 47.3,
    not_done: 20.3,
    in_progress: 32.4
  }
];

export default function BarChartComp() {
  function  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  }
  return (
      <div style={{width: '100%', height: '100%'}}>
      
        <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 5
        }}
        barSize={56}
       
        >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" scale='auto' reversed />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="done" stackId="a"  fill="#009f08" fillOpacity= '0.8'/>
        <Bar dataKey="not_done" stackId="b" fill="#ff4716"   fillOpacity= '0.8'/>
        <Bar dataKey="in_progress" stackId="c"  fill="#ffd500"  fillOpacity= '0.8'/>
        </BarChart>
    
    </div>
  );
}
