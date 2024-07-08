import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const DetailsDisplayPage = ({ details }) => {
  return (
    <div>
      <center>
        <Card style={{ width: "30rem" }}>
          <Card.Title>DISPLAYING DETAILS</Card.Title>
          <Card.Body>
            <div className="container text-center">
              {details.map((detail, index) => (
                <div key={index} className="row">
                  <div className="col">{detail.name}</div>
                  <div className="col">{detail.dob}</div>
                  <div className="col">{detail.phone}</div>
                  <div className="col">{detail.email}</div>
                </div>
              ))}
            </div>
            <Link to="/">
              <Button variant="primary">Previous Page</Button>
            </Link>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.details.details
});

export default connect(mapStateToProps)(DetailsDisplayPage);
