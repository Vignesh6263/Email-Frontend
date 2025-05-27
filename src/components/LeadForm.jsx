import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import validator from "validator";
import "./form.css";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      console.log("Sending request with data:", formData);
    const response = await fetch("https://your-backend.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response from backend:", data);
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit lead");
      }
      setSuccess("Lead submitted successfully! Our team will reach out soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.log("Submission Error:", error.message);
      setErrors({ submit: error.message || "Failed to submit lead. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="lead-form-container">
      <h1 className="form-title">Lead Alert Generator</h1>
      <Form onSubmit={handleSubmit} className="lead-form">
        {success && <Alert color="success">{success}</Alert>}
        {errors.submit && <Alert color="danger">{errors.submit}</Alert>}
        <FormGroup>
          <Label for="name">Name *</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            invalid={!!errors.name}
            placeholder="Enter your name"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email *</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            invalid={!!errors.email}
            placeholder="Enter your email"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </FormGroup>
        <Button type="submit" color="primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit Lead"}
        </Button>
      </Form>
    </Container>
  );
};

export default LeadForm;
