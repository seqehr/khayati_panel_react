import React, { useState, useEffect } from 'react'
// services
import { DataDashboardService } from '../../services/DashboardServices'

const DashboardContext = React.createContext()
export function DashboardContextProvider({ children }) {
  const [data, setData] = useState({})
  useEffect(() => {
    DataDashboardService()
      .then((res) => {
        setData(res.data.data)
      })
      .catch((ex) => {
        console.log(ex)
      })
  }, [])
  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardContext
