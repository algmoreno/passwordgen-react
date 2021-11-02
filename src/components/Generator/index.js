import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Generator() {
  return (
    <div class='container'>
      <div class='row align-items-end'>
        <div class='col-3'></div>
        <div class='col-6'>
          <Card className="text-center gen-card">
            <Card.Header>Click Go to Start</Card.Header>
            <Card.Body>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </div>
        <div class= 'col-3'></div>
      </div>
    </div>
  )
}

export default Generator;