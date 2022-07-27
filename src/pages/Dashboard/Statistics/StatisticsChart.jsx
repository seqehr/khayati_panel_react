// Hooks
import useTheme from '../../../hooks/useTheme'

// Libraries
import * as shamsi from 'shamsi'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { useEffect, useState } from 'react'
import { DataDashboardService } from '../../../services/DashboardServices'

const StatisticsChart = (props) => {
  const { theme } = useTheme()

  const [data, setData] = useState([])
  useEffect(() => {
    DataDashboardService()
      .then((res) => {
        setData(res.data.data.newdate)
      })
      .catch((ex) => {
        console.log(ex)
      })
  }, [])
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <YAxis
          dataKey='count'
          type='number'
          axisLine={false}
          tickLine={false}
          tickFormatter={(views) => views}
          allowDecimals={false}
        />
        <XAxis
          dataKey='day'
          type='category'
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='count'
          stroke={`${theme === 'light' ? '#FF9416' : '#DD851D'}`}
          strokeWidth={3}
          fill='url(#dashboardStatisticsChartGradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default StatisticsChart
