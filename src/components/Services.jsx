import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import webImg from '../assets/web-mobile.png';
import digitalImg from '../assets/digital-strategy.png';

function Services() {
  return (
    <Container className="my-5">
      {/* Web & Mobile App Development Section */}
      <Row className="align-items-center mb-5">
        <Col md={4} className="mb-3 mb-md-0">
          <img src={webImg} alt="Web & Mobile" style={{ width: '100%' }} />
        </Col>
        <Col md={8}>
          <h3 className="text-primary mb-3">Web & Mobile App Development</h3>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
          </p>
          <div className="text-center text-md-start">
            <Button
              variant="warning"
              className="services-btn"
              style={{ backgroundColor: '#F28D35', borderColor: '#F28D35', color: '#fff' }}
            >
              LEARN MORE
            </Button>
          </div>
        </Col>
      </Row>

      {/* Digital Strategy Consulting Section */}
      <Row className="align-items-center flex-md-row-reverse">
        <Col md={4} className="mb-3 mb-md-0">
          <img src={digitalImg} alt="Digital Strategy" style={{ width: '100%' }} />
        </Col>
        <Col md={8}>
          <h3 className="text-primary mb-3">Digital Strategy Consulting</h3>
          <p>
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <div className="text-center text-md-start">
            <Button
              variant="warning"
              className="services-btn"
              style={{ backgroundColor: '#F28D35', borderColor: '#F28D35', color: '#fff' }}
            >
              LEARN MORE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
