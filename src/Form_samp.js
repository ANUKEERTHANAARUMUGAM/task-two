import React, { useState } from "react";
import "./Form.css";
import Font, { Text } from 'react-font'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
  var [name, setName] = useState("");
  var [age, setAge] = useState(0);
  var [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");

  return (
    <div>
      <form /*onSubmit={handleSubmit}*/ id="form-div">
        <div className="group-name">
          <label htmlFor="name">Name:</label>
          <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          {/* <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
        </div>
        <div className="group-age">
          <label htmlFor="age">Age:</label>
          <input type="number" class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}/>
          {/* <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /> */}
        </div>
        <div class="group-email">
          <label htmlFor="email">Email:</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter age"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>

          {/* <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        </div>
        <div class="group-phone">
          <label htmlFor="phone">Phone:</label>
          <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}/>

          {/* <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
        </div>
        <button type="button" class="btn btn-outline-warning">Submit</button>
      </form>
    </div>
  );
};

export default Form;
