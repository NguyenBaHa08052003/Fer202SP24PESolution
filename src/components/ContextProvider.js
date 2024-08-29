import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const MyContext = createContext()
function ContextProvider({children}) {

    const [departments,setDepartments] = useState([])
    const [employees, setEmployees] = useState([])
    const [projects, setProjects] = useState([])
    const [checkRadio, setCheckRadio] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const depData = await axios.get(`http://localhost:9999/departments`);
            setDepartments(depData.data)

            const empData = await axios.get(`http://localhost:9999/employees`);
            setEmployees(empData.data)

            const proData = await axios.get(`http://localhost:9999/projects`);
            setProjects(proData.data)
            
        }
        fetchData()
    },[])

    const getDepartmentNameById = (depId) => {
        const nameDep = departments?.find(dep => dep.id == depId)?.name
        return nameDep
    }

    const data = {
        departments,setDepartments,
        employees, setEmployees,
        projects, setProjects,
        getDepartmentNameById,
        checkRadio, setCheckRadio
    }
  return (
    <MyContext.Provider value={data} >
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider
