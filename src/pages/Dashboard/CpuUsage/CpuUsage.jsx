import { useState } from 'react'

// Hooks

import useTheme from '../../../hooks/useTheme'

// Components
import DashboardBox from '../DashboardBox'
import DashboardBoxHead from '../DashboardBoxHead'

import StatisticsChart from './Chart'

// MUI
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// Icons
import { BiBitcoin } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { useEffect } from 'react'
import { UsageCpuDashboardService } from '../../../services/DashboardServices'
import useToken from '../../../hooks/useToken'

const CpuUsage = (props) => {
  const { theme } = useTheme()
  const { token } = useToken()

  let COLORS = ['#002a86', '#3472b8ac']

  const [data, setData] = useState([])
  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  useEffect(() => {
    UsageCpuDashboardService(token)
      .then((res) => {
        const data = {
          used: res.data.cpuUsage.split('%')[0].replace('%', ''),
          free: parseInt(
            res.data.cpuUsage.split('%')[1].replace('/', '').replace('%', '')
          ),
        }
        if (data.used > 50) {
          COLORS = ['#f7590f', '#ef925c']
          if (data.used > 80) {
            COLORS = ['#f7360f', '#ef665c']
          }
        }
        setData([
          { name: 'used', value: data.used },
          { name: 'free', value: data.free },
        ])
      })
      .catch((ex) => {
        console.log(ex)
      })
  }, [])

  return (
    <DashboardBox extraClasses='overflow-hidden'>
      <div className='flex justify-between'>
        <DashboardBoxHead text={'مقدار CPU مصرفی'} />
      </div>
      <div>
        {/* —————————— D A T E - R A N G E —————————— */}

        {/* —————————— C H A R T —————————— */}
        <div dir='ltr' style={{ width: '100%', height: '230px' }}>
          <StatisticsChart
            renderCustomizedLabel={renderCustomizedLabel}
            COLORS={COLORS}
            data={data}
          />
        </div>
        {data.length != 0 && (
          <div className='flex justify-between flex-col sm:flex-row md:flex-col'>
            <p dir='rtl' className='text-right pb-2 flex '>
              مقدار استفاده شده :
              <div
                style={{ background: COLORS[0] }}
                className={'w-4 h-4 rounded-full mt-1 mx-3'}
              ></div>
              {parseInt(data[0].value)} %
            </p>
            <p dir='rtl' className='text-left pb-2 flex'>
              مقدار فضای آزاد :
              <div
                style={{ background: COLORS[1] }}
                className={'w-4 h-4 rounded-full mt-1 mx-3'}
              ></div>
              {data[1].value} %
            </p>
          </div>
        )}
      </div>
    </DashboardBox>
  )
}

export default CpuUsage
