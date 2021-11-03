import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Generator = () => {

  function generatePassword() {
    console.log("hello")
    
    let message = 'hi there'

    return(
      <div>{message}</div>
    )
    
  }

  function writePassword() {

  }

  return (
    <div class='container'>
      <div className='row align-items-end'>
        <div className='col-3'></div>
        <div className='col-6'>
          <Card className="text-center gen-card">
            <Card.Header className='gen-card-header'>Click Go to Start</Card.Header>
            <Card.Body>
              <Card.Text className='password-text'>
                {writePassword()}
              </Card.Text>
              <Button onClick={generatePassword} variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}

export default Generator;