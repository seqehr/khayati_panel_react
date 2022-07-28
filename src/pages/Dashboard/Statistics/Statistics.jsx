import { useState } from 'react'

// Hooks

import useTheme from '../../../hooks/useTheme'

// Components
import DashboardBox from '../DashboardBox'
import DashboardBoxHead from '../DashboardBoxHead'

import StatisticsChart from './StatisticsChart'

// MUI
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// Icons
import { BiBitcoin } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { RiArrowRightUpLine } from 'react-icons/ri'
import useDashboard from '../../../hooks/useDashboard'

const Statistics = (props) => {
  const { theme } = useTheme()
  const { data, setData } = useDashboard()
  return (
    <DashboardBox extraClasses='overflow-hidden'>
      <div className='flex justify-between'>
        <DashboardBoxHead text={`نمودار بازدید سایت ( در یک ماه اخیر )`} />
        <span
          className='text-bitcoin-light pb-10 pt-1 pl-5 font-bold'
          dir='ltr'
        >
          {data.totalviews > 1000
            ? data.totalviews / 1000 + 'K'
            : data.totalviews}{' '}
          بازدید کل
        </span>
      </div>
      <div>
        {/* —————————— D A T E - R A N G E —————————— */}

        {/* —————————— C H A R T —————————— */}
        <div dir='ltr' style={{ width: '100%', height: '400px' }}>
          <StatisticsChart />
        </div>
      </div>
    </DashboardBox>
  )
}

export default Statistics
