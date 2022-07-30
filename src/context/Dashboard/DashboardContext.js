import React, { useState, useEffect } from 'react'
//hooks
import useToken from '../../hooks/useToken'
// services
import { DataDashboardService } from '../../services/DashboardServices'

const DashboardContext = React.createContext()
export function DashboardContextProvider({ children }) {
  const { token } = useToken()
  const [data, setData] = useState({})
  useEffect(() => {
    DataDashboardService(token)
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
