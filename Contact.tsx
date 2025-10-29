import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        // Clear previous submission results
        setSubmitResult(null);
        
        // Disable submit button while submitting
        setIsSubmitting(true);

        try {
            // Send POST request to API
            const response = await fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if submission was successful
            if (response.ok) {
                setSubmitResult({
                    success: true,
                    message: "Your message has been sent successfully. We'll get back to you soon!"
                });
                
                // Clear form fields after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitResult({
                    success: false,
                    message: "Failed to submit the form. Please try again later."
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitResult({
                success: false,
                message: "An error occurred while submitting the form. Please check your connection and try again."
            });
        } finally {
            // Re-enable submit button after submission
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center mb-5">
                <Col md={8} className="text-center">
                    <h1 style={{ color: 'var(--primary-color)' }}>Contact Us</h1>
                    <h5 className="text-muted">Have Questions? We're Happy to Help.</h5>
                </Col>
            </Row>

            <Row>
                <Col lg={7} className="mb-4 mb-lg-0">
                    <Card className="shadow h-100">
                        <Card.Body className="p-4">
                            <h3 className="mb-4">Send Us a Message</h3>
                            
                            {submitResult && (
                                <div className={`alert ${submitResult.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {submitResult.message}
                                </div>
                            )}
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email address"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Message subject"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message"
                                        required
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button 
                                        type="submit" 
                                        style={{ 
                                            backgroundColor: 'var(--primary-color)', 
                                            border: 'none',
                                            padding: '0.75rem'
                                        }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Contact Form"}
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={5}>
                    <Card className="shadow h-100">
                        <Card.Body className="p-4">
                            <h3 className="mb-4">Other Ways to Reach Us</h3>
                            
                            <div className="mb-4">
                                <h5>
                                    <span style={{ marginRight: '10px', color: 'var(--primary-color)' }}>📧</span>
                                    Email
                                </h5>
                                <p className="ms-4">support@bloodhaven.org</p>
                            </div>
                            
                            <div className="mb-4">
                                <h5>
                                    <span style={{ marginRight: '10px', color: 'var(--primary-color)' }}>📞</span>
                                    Phone
                                </h5>
                                <p className="ms-4">(123) 456-7890</p>
                            </div>
                            
                            <div className="mb-4">
                                <h5>
                                    <span style={{ marginRight: '10px', color: 'var(--primary-color)' }}>📍</span>
                                    Address
                                </h5>
                                <p className="ms-4">123 Blood Haven Ln.<br />City, State, ZIP</p>
                            </div>
                            
                            <h3 className="mb-3 mt-5">Common Questions</h3>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            How can I donate blood?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Register on our platform, schedule an appointment, and visit one of our blood donation centers. The process takes about 30-45 minutes.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            How long does a donation appointment take?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The actual blood donation takes about 8-10 minutes. The entire process, including registration, screening, and recovery, takes about 30-45 minutes.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            What happens after I request blood?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            We immediately match your request with available donors in your area. For emergency requests, we prioritize and expedite the process to ensure you receive blood as quickly as possible.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;