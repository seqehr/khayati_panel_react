// Hooks
import useTheme from '../../../hooks/useTheme'

// Libraries
import * as shamsi from 'shamsi-date-converter'
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
        const Data = []
        res.data.data.newdate.map((i, index) => {
          const date = shamsi.gregorianToJalali(`${i.day}`)
          Data.push({
            بازدید: i.count,
            تاریخ: `${date[0] + '/' + date[1] + '/' + date[2]}`,
          })
          if (index + 1 == res.data.data.newdate.length) {
            setData(Data)
          }
        })
      })
      .catch((ex) => {
        console.log(ex)
      })
  }, [])
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <YAxis
          dataKey='بازدید'
          type='number'
          axisLine={false}
          tickLine={false}
          tickFormatter={(views) => views}
          allowDecimals={false}
        />
        <XAxis
          dataKey='تاریخ'
          type='category'
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='بازدید'
          stroke={`${theme === 'light' ? '#FF9416' : '#DD851D'}`}
          strokeWidth={3}
          fill='url(#dashboardStatisticsChartGradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default StatisticsChart
