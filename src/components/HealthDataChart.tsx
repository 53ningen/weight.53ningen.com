import { format } from 'date-fns'
import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import HealthData from '../models/HealthData'

interface Props {
  data: HealthData[]
}

export const HealthDataChart = ({ data }: Props) => {
  const d = data.map(({ timestamp, weight, bfp }) => ({
    timestamp: timestamp.getTime(),
    weight,
    bfp,
  }))
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={d}>
        <Legend verticalAlign="top" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(t) => format(t, 'yyyy-MM-dd')}
          type="number"
          domain={['auto', 'auto']}
          scale="time"
        />
        <YAxis
          yAxisId="left"
          tickFormatter={(w: number) => (w === 0 ? '' : `${w.toFixed(1)}kg`)}
          domain={[0, 'auto']}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(p: number) => (p === 0 ? '' : `${p.toFixed(1)}%`)}
          domain={[0, 'auto']}
        />
        <Tooltip labelFormatter={(t: Date) => format(t, 'yyyy-MM-dd hh:mm')} />
        <Line
          yAxisId="left"
          name="体重 (kg)"
          type="monotone"
          dataKey="weight"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          name="体脂肪率 (%)"
          type="monotone"
          dataKey="bfp"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
