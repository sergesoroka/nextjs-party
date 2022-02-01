
import React from "react";
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

export default function BarChartSample() {
  return (
    <BarChart data={data} layout="vertical">
        <XAxis type="number"  />
        <YAxis dataKey="name" reversed type="category" />
        <Tooltip />
        <Legend />
        <Bar legendType="done" dataKey="1" fill="#ff6f31" />
        <Bar legendType="not_done" dataKey="2" fill="#ff9f02" />
        <Bar legendType="in_progress" dataKey="3" fill="#ffcf02" />
        
    </BarChart>
  );
}
