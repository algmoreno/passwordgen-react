import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Generator = () => {

  let charset = "";

  const [password, setPassword] = useState("Password will appear here");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function generatePassword() {



    let retVal = ""
    // let passLength = window.prompt("Choose a password length between 8-128");

    // if (passLength < 8 || passLength > 128 || passLength === '') {
    //   alert('Enter a valid response');
    //   return null;
    // }

    // let confirmLower = window.confirm("Press 'Ok' if you want lower case letters in your password");
    // let confirmUpper = window.confirm("Press 'Ok' if you want upper case letters in your password");
    // let confirmNumber = window.confirm("Press 'Ok' if you want numbers in your password");
    // let confirmSpecial = window.confirm("Press 'Ok' if you want special characters in your password");

    // let length = passLength;

    // if (confirmLower) {
    //   charset += "abcdefghijklmnopqrstuvwxyz"
    // }
    // if (confirmUpper) {
    //   charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // }
    // if (confirmNumber) {
    //   charset += "123456789"
    // }
    // if (confirmSpecial) {
    //   charset += "!\"#$%&',()*+-./:;<>=@[]`{}|~"
    // }

    // for (var i = 0, n = charset.length; i < length; ++i) {
    //   retVal += charset.charAt(Math.floor(Math.random() * n));
    // }

    setPassword(retVal)

  }


  return (
    <div className='container'>
      <div className='row align-items-end'>
        <div className='col-3'></div>
        <div className='col-6'>
          <Card className="text-center gen-card">
            <Card.Header className='gen-card-header'>Click Go to Start</Card.Header>
            <Card.Body>
              <Card.Text className='password-text'>
                {password}
              </Card.Text>
              <Button className='go-btn' onClick={setShow} variant="primary">Go</Button>
            </Card.Body>
          </Card>
          {setShow && (
            <>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Preferences
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Password Length</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        Enter a password length between 8-128
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Uppercase" />
                      <Form.Check type="checkbox" label="Lowercase" />
                      <Form.Check type="checkbox" label="Numbers" />
                      <Form.Check type="checkbox" label="Special Characters" />
                    </Form.Group>
                    
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>

        <div className='col-3'></div>
      </div>
    </div>
  )
}

export default Generator;