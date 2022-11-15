// Hooks
import useTheme from '../../../hooks/useTheme'

// Libraries
import * as shamsi from 'shamsi-date-converter'
import { ResponsiveContainer, PieChart, Pie, Cell, Text } from 'recharts'
import { useEffect, useState } from 'react'
import {
  DataDashboardService,
  UsageCpuDashboardService,
} from '../../../services/DashboardServices'
import useToken from '../../../hooks/useToken'

const Chart = ({ renderCustomizedLabel, data, COLORS }) => {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius={70}
          fill='#ffffff'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Chart
