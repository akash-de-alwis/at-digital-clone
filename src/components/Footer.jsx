import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <div style={{ backgroundColor: '#4F46E5', color: 'white', padding: '60px 0 20px' }}>
      <Container>
        <Row className="align-items-start">
          <Col md={6}>
            <img
              src={logo}
              alt="at digital"
              style={{ width: '150px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: 0 }}>
              Your goal is our target. Not anything in between. We use<br />
              online marketing platforms and tools to achieve single<br />
              objective - your business results.
            </p>
          </Col>
          <Col md={3}>
            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
              Our Technologies
            </h6>
            <ul className="list-unstyled" style={{ fontSize: '14px', lineHeight: '2' }}>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
              Our Services
            </h6>
            <ul className="list-unstyled" style={{ fontSize: '14px', lineHeight: '2' }}>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0 20px' }} />

        <Row>
          <Col className="text-center" style={{ fontSize: '14px' }}>
            Privacy Policy <span style={{ margin: '0 8px' }}>|</span> Terms & Conditions
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
