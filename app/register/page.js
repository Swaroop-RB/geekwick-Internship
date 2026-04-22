"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Course */}
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={form.course}
          onChange={handleChange}
        />
        <br /><br />

        {/* Submit button */}
        <button disabled={!form.name || !form.email}>
          Submit
        </button>
      </form>

      {/* Show submitted data */}
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Course: {form.course}</p>

          <p style={{ color: "green" }}>
            ✅ Registration Successful!
          </p>
        </div>
      )}
    </div>
  );
}