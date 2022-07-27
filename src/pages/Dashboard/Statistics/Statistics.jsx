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
      <DashboardBoxHead text={`نمودار بازدید سایت ( در یک ماه اخیر )`} />

      <div>
        {/* —————————— C U R R E N C Y —————————— */}
        <div dir='ltr' className='mb-6'>
          <div className='flex'>
            <div className='flex items-center gap-1 text-lg text-green-light dark:text-green-dark'>
              <span>
                {data.totalviews > 1000
                  ? data.totalviews / 1000 + 'K'
                  : data.totalviews}{' '}
                بازدید کل
              </span>
            </div>
          </div>
        </div>
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
