// Context
import { useContext } from 'react'
import DashboardContext from '../context/Dashboard/DashboardContext'

const useDashboard = (props) => {
  const { data, setData } = useContext(DashboardContext)
  return {
    data,
    setData,
  }
}

export default useDashboard
