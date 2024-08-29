import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sider from './Sider'
import TablePro from './TablePro'

function HomePage() {
  return (
    <Container>
        <h1 style={{textAlign:'center'}}>List of Projects</h1>
      <Row>
        <Col md={3}>
            <Sider/>
        </Col>
        <Col md = {9}>
            <TablePro/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
