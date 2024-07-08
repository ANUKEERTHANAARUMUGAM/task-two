import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addDetails } from './actions/actions';

const FormPage = ({ addDetails }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleAddDetails = () => {
    addDetails({ name, dob, phone, email });
    setName("");
    setDob("");
    setPhone("");
    setEmail("");
  };
  

  useEffect(() => {
    console.log(name);
    console.log(dob);
    console.log(phone);
    console.log(email);
  }, [name, dob, phone, email]);

  return (
    <div>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Title>ENTER DETAILS</Card.Title>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleAddDetails}>Add Details</Button>
            <Link to="/DetailsDisplayPage">
              <Button variant="primary">Details Page</Button>
            </Link>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

const mapDispatchToProps = {
  addDetails
};

export default connect(null, mapDispatchToProps)(FormPage);
