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
  return (
      <div style={{width: '100%', height: '100%'}}>
      
        <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 5
        }}
        barSize={20}
        stroke='#fff'
        strokeWidth='1'
        >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" scale='auto'  />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="done" stackId="a" fill="#009f08" />
        <Bar dataKey="not_done" stackId="a" fill="#ff4716"  />
        <Bar dataKey="in_progress" stackId="a" fill="#ffd500" />
        </BarChart>
    
    </div>
  );
}