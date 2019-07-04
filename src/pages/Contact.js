import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Contact extends React.Component {
  render(){
    return (
      <div>
        <h1>Contact her</h1>
        <br/>
        <br/>

        <h3>
          Email AngelaVanDenEeden at gmail dot com
        </h3>
        {/*
        <div>
          <Form name="contact">
            <Form.Group controlId="contactForm.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="contactForm.Happy">
              <Form.Label>Are you happy?</Form.Label>
              <Form.Control name="happy" as="select">
                <option>Yes</option>
                <option>No</option>
                <option>What is</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="contactForm.Message">
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      */}
      </div>
    )
  }
}