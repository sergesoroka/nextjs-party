import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
    Tooltip
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
    done: 17,
    not_done: 50,
    in_progress: 22
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
    done: 37.3,
    not_done: 40.3,
    in_progress: 32.4
  }
];

export default function VerticalChart() {
  return <ComposedChart
      layout="vertical"
      width={500}
      height={360}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 60
      }}
      
    >

      <XAxis hide='true' type="number" domain={['0', '100']} />
      <YAxis dataKey="name" type="category"  />
      {/* <Tooltip /> */}
      <Bar dataKey="done" barSize={10}  fill="#009f08" fillOpacity= '0.8'/>
      <Bar dataKey="not_done" barSize={10} fill="#ff4716"   fillOpacity= '0.8'/>
      <Bar dataKey="in_progress" barSize={10}  fill="#ffd500"  fillOpacity= '0.8' />
    </ComposedChart>;
}
