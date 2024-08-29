import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from './ContextProvider'
import { Container } from 'react-bootstrap'

function ListEmployees() {
    const {id} = useParams()
    const {getDepartmentNameById,employees, setEmployees} = useContext(MyContext)
  return (
    <Container>
      <h1 style={{textAlign:'center'}}>List of Employees</h1>
      <Link to={"/"}>Home page</Link>
      <h3>Department: {getDepartmentNameById(id)}</h3>
      <table className='table table-bordered table-hover table-striped'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Employee name</th>
                <th>Date of birth</th>
                <th>Gender</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            {employees?.map((emp) => (
                <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.dob}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.position}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}

export default ListEmployees
