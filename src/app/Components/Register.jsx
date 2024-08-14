"use client";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = (e) => {
    e.preventDefault();
    if (!email.endsWith('@kiit.ac.in')) {
      alert('Please enter your KIIT mail ID');
    } else {
      setError('');
      // Proceed with form submission, for example using a POST request.
      console.log('Form submitted with email:', email);
    }
  };

  return (
    <div className="App box-content h-auto w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="head flex flex-col justify-center items-center">
        <img src="aws.svg" className="aws_logo bg-slate-700 my-4" alt="AWS Logo" />
        <h1 className="text-center text-[55px] font-bold text-white">
          AWS KIIT Chapter Registration Page
        </h1>
      </div>
      
      <br />
      <form className="form_main box-content h-auto w-auto mx-[20%]" onSubmit={validate}>
        <div className="reg">
          <p className="text-[25px]">Required fields are marked by <b>*</b></p>

          <label>
            <p className="text-[20px]">Enter your Roll no. *</p>
            <input type="text" required />
          </label>
          <br />
          
          <label>
            <p className="text-[20px]">Enter your name *</p>
            <input type="text" required />
          </label>
          <br />
          
          <label>
            <p className="text-[20px]">Enter your mail id <b>(KIIT ID)</b> *</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <p className="text-[20px]">Select your academic year *</p>
          <label>
            <input type="radio" name="academicYear" value="1" required /> 1
          </label>
          <label>
            <input type="radio" name="academicYear" value="2" required /> 2
          </label>
          <label>
            <input type="radio" name="academicYear" value="3" required /> 3
          </label>
          <br />

          <p className="text-[25px]">Gender *</p>
          <label>
            <input type="radio" name="gender" value="Male" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" required /> Female
          </label>
          <br />

          <label>
            <p className="text-[20px]">Date of Birth *</p>
            <input type="date" required />
          </label>
          <br />

          <label>
            <p className="text-[25px]">Enter your address *</p>
            <textarea className="address" required></textarea>
          </label>
          <br />

          <label>
            <p className="text-[25px]">Kindly upload your CV/Resume <b>(in PDF format)</b> *</p>
            <input type="file" accept="application/pdf" required />
          </label>
          <br />

          <label>
            <p className="text-[25px]">Provide your LinkedIn URL *</p>
            <input type="url" required />
          </label>
          <br />

          <label>
            <p className="text-[25px]">Provide your GitHub Link *</p>
            <input type="url" required />
          </label>
          <br />

          <label>
            <p className="text-[25px]">What makes you feel a best fit for AWS KIIT Chapter? *</p>
            <textarea required></textarea>
          </label>
          <br />

          <button type="submit" className="bg-pink-700 text-white font-bold px-[2%] py-[1%] rounded hover:bg-green-600">
            Register
          </button>
          <br />
        </div>
      </form>
    </div>
  );
}

export default Register;
