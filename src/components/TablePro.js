import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'
import { Link } from 'react-router-dom'

function TablePro() {
    const {projects,getDepartmentNameById,checkRadio, setCheckRadio} = useContext(MyContext)

    const filtered = projects.filter((pro) => {
        const matchRadio = pro.department == checkRadio || checkRadio === 'All' || checkRadio == ""
        return matchRadio
    })
  return (
    <div>
        <Link to={'/add/project'}>Add Project</Link>
      <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Project name</th>
                <th>Description</th>
                <th>Start date</th>
                <th>Type</th>
                <th>Department</th>
                <th>Function</th>
            </tr>
        </thead>
        <tbody>
            {filtered?.map((pro) => (
                <tr>
                    <td>{pro.id}</td>
                    <td>{pro.name}</td>
                    <td>{pro.description}</td>
                    <td>{pro.startDate}</td>
                    <td>{pro.type}</td>
                    <td><Link to={`/departments/${pro.id}/employees`}>{getDepartmentNameById(pro.department)}</Link></td>
                    <td><Link to={`/projects/edit/${pro.id}`}>Edit</Link></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePro
