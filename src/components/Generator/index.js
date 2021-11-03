import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Generator() {

  var generatePassword = () => {

  }

  var writePassword = () => {
    
  }

  return (
    <div class='container'>
      <div class='row align-items-end'>
        <div class='col-3'></div>
        <div class='col-6'>
          <Card className="text-center gen-card">
            <Card.Header className='gen-card-header'>Click Go to Start</Card.Header>
            <Card.Body>
              <Card.Text className='password-text'>
                {writePassword}
              </Card.Text>
              <Button onClick={generatePassword} variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </div>
        <div class= 'col-3'></div>
      </div>
    </div>
  )
}

export default Generator;