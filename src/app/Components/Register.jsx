"use client";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');

  const validate = (e) => {
    e.preventDefault(); // Prevent form submission for testing purposes
    if (!email.endsWith('@kiit.ac.in')) {
      alert('Please enter your KIIT mail ID');
    } else {
      console.log('Your form has been submitted successfully.');
    }
  };

  return (
    <div className="App box-content h-auto w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="head flex flex-col justify-center items-center">
        <img src="aws.svg" className="aws_logo my-4" alt="AWS Logo" />
        <h1 className="text-center text-3xl sm:text-5xl font-bold text-white">
          AWS KIIT Chapter Registration Page
        </h1>
      </div>

      <br />
      <form className="form_main mx-auto max-w-2xl px-4 sm:px-6 lg:px-8" onSubmit={validate}>
        <div className="reg">
          <p className="text-lg sm:text-xl text-white">Required fields are marked by <b>*</b></p>

          <label>
            <p className="text-lg">Enter your Roll no. *</p>
            <input type="text" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">Enter your name *</p>
            <input type="text" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">Enter your mail id <b>(KIIT ID)</b> *</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2" required />
          </label>
          <br />

          <p className="text-lg">Select your academic year *</p>
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

          <p className="text-lg">Gender *</p>
          <label>
            <input type="radio" name="gender" value="Male" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" required /> Female
          </label>
          <br />

          <label>
            <p className="text-lg">Date of Birth *</p>
            <input type="date" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">Enter your address *</p>
            <textarea className="address w-full p-2" required></textarea>
          </label>
          <br />

          <label>
            <p className="text-lg">Kindly upload your CV/Resume <b>(in PDF format)</b> *</p>
            <input type="file" accept="application/pdf" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">Provide your LinkedIn URL *</p>
            <input type="url" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">Provide your GitHub Link *</p>
            <input type="url" className="w-full p-2" required />
          </label>
          <br />

          <label>
            <p className="text-lg">What makes you feel a best fit for AWS KIIT Chapter? *</p>
            <textarea className="w-full p-2" required></textarea>
          </label>
          <br />

          <label>
            <p className="text-lg">How will your skills contribute to AWS KIIT Chapter? *</p>
            <p>(Expecting some good answers from your side 😊)</p>
            <textarea className="w-full p-2" required></textarea>
          </label>
          <br />

          <button type="submit" className="bg-pink-700 text-white font-bold px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
            Register
          </button>
          <br />
        </div>
      </form>
    </div>
  );
}

export default Register;
