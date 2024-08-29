import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'
import {Form} from 'react-bootstrap'
function Sider() {
    const {departments,setDepartments,checkRadio, setCheckRadio} = useContext(MyContext)

    const handleOnchange =(e) => {
        setCheckRadio(e.target.value)
    }
    console.log(checkRadio);
    
  return (
    <div>
      <h3>Departments</h3>
      <Form.Check onChange={handleOnchange} value={"All"} name='radio-dep' type='radio' label="All"/>
      {departments?.map((item) => (
        <Form.Check onChange={handleOnchange} value={item.id} name='radio-dep' type='radio' label={item.name}/>
      ))}
    </div>
  )
}

export default Sider
