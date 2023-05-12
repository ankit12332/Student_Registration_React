import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const StudentProfile = () => {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    studentName: "",
    email: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dateOfBirth: "",
    department: "",
    mobileNumber: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    else{
    axios
      .post("http://localhost:3000/students", studentData)
      .then((response) => {
        console.log(response);
        setShowModal(true); // show the modal
      })
      .catch((error) => {
        console.log(error); 
      });
    }
    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Student Profile</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="studentName"
                placeholder="Name"
                value={studentData.studentName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide your "Name"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  as={Col} md="6" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email address"
                value={studentData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide your "Email"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formFatherName">
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={studentData.fatherName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide your "Father's name"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formMotherName">
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={studentData.motherName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide your "Mother's name"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                placeholder="Gender"
                value={studentData.gender}
                onChange={handleChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please select "Options"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={studentData.dateOfBirth}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter your "Date of Birth"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                placeholder="Department Name"
                value={studentData.department}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide your "Department"</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={studentData.mobileNumber}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter your "Mobile Number"</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Student is registered successfully.</Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={() => setShowModal(false)}>Okay</Button>
        </Modal.Footer>
       </Modal>
    </Container>
  );
};

export default StudentProfile;
