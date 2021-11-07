import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Generator = () => {

  const [password, setPassword] = useState("Password will appear here");
  const [length, setLength] = useState('');
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [special, setSpecial] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const upperClick = () => setUpper(!upper);
  const lowerClick = () => setLower(!lower);
  const numberClick = () => setNumbers(!numbers);
  const specialClick = () => setSpecial(!special);

  function generatePassword() {

    let retVal = ""
    let charset = "";

    if (upper) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lower) {
      charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (numbers) {
      charset += "123456789"
    }
    if (special) {
      charset += "!\"#$%&',()*+-./:;<>=@[]`{}|~"
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(retVal)
  }


  return (
    <div className='container'>
      <div className='row align-items-end'>
        <div className='col-3'></div>
        <div className='col-6'>
          <Card className="text-center gen-card">
            <Card.Header className='gen-card-header'>
            <Button className='pref-btn' onClick={setShow} variant="primary">Preferences</Button>
            </Card.Header>
            <Card.Body>
              <Card.Text className='password-text'>
                {password}
              </Card.Text>
              <Button className='go-btn' onClick={generatePassword} variant="primary">Go</Button>
              
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
                      <Form.Control onChange ={event => setLength(event.target.value)} type="text" placeholder="" />
                      <Form.Text className="text-muted">
                        Enter a password length between 8-128
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check onClick ={upperClick} checked={upper} type="checkbox" label="Uppercase" />
                      <Form.Check onClick ={lowerClick} checked={lower} type="checkbox" label="Lowercase" />
                      <Form.Check onClick ={numberClick} checked={numbers} type="checkbox" label="Numbers" />
                      <Form.Check onClick ={specialClick} checked={special} type="checkbox" label="Special Characters" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button> */}
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