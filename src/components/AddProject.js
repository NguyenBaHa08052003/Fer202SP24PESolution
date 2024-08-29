import React, { useContext, useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MyContext } from './ContextProvider';
import axios from 'axios';

function AddProject() {
    const { departments, projects,setProjects } = useContext(MyContext);

    
    const navigate = useNavigate()
    const [updatePro, setUpdatePro] = useState({
      id: projects.length + 1,
      name: "",
      description: "",
      startDate: "",
      type: "",
      department: 1,
    });
    // useEffect(() => {
    //   const getProjectById = projects?.find((pro) => pro.id == id);
    //   if (getProjectById) {
    //       setUpdatePro(getProjectById)
    //   }
    // }, [id, projects]);
    const handleOnchange =(e) => {
      const {name, value} = e.target;
      const parseValue = name === "department" ? parseInt(value) : value
      setUpdatePro({...updatePro, [name]: parseValue})
  
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!updatePro.name.trim()){
          alert('Please enter the form fields that are required');
          return;
      }
      const allData = await axios.post(`http://localhost:9999/projects`, updatePro)
    //   setProjects(projects.map(pro => pro.id == id ? updatePro : pro))
    
        setProjects([...projects, allData.data])
      alert('Add success')
      navigate('/')
    }
    console.log(updatePro);
    
    
    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Add Project</h1>
        <h5>
          <Link to={"/"}>Home page</Link>
        </h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>
              Project name <label style={{ color: "red" }}>*</label>
            </Form.Label>
            <Form.Control onChange={handleOnchange} name="name" value={updatePro?.name} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={handleOnchange} name="description" value={updatePro?.description} as="textarea" style={{ height: "150px" }} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Start date</Form.Label>
            <Form.Control onChange={handleOnchange} name="startDate" value={updatePro?.startDate} type="date" />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control onChange={handleOnchange} name="type" value={updatePro?.type} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control onChange={handleOnchange} name="department" value={updatePro?.department} as="select">
              {departments.map((dep) => (
                <option value={dep.id} >{dep.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <button style={{marginTop:'30px'}} className="btn btn-primary">Add</button>
        </Form>
      </Container>
    );
}

export default AddProject
