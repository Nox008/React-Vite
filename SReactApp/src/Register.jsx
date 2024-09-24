import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap'
import { useState } from 'react'


function Register() {
    const [fname, setFname] = useState(0)
    const [lname, setLname] = useState(0)
    const [state, setState] = useState(0)
    const [show, setShow] = useState(true);
    return (
        <>
            <Container className='m-5'>
                <Row className='justify-content-center'>
                    <Col lg={6} xs={12} className='border shadow rounded p-4 m-5'>
                        <Form>
                            <Form.Group className='mt-3'>
                                <Form.Control
                                    type="text"
                                    name="fname"
                                    placeholder="Enter First name"
                                    onChange={
                                        (e) => {
                                            setFname(e.target.value)
                                        }
                                    }
                                />
                            </Form.Group>
                            <Form.Group className='mt-3'>
                                <Form.Control
                                    type="text"
                                    name="lname"
                                    placeholder="Enter Last name"
                                    onChange={
                                        (e) => {
                                            setLname(e.target.value)
                                        }
                                    }
                                />
                            </Form.Group>
                            <Form.Group className='mt-3'>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter E-Mail ID"
                                />
                            </Form.Group>
                            <Form.Group className='mt-3 mb-3'>
                                <Form.Select onChange={(e) => { setState(e.target.value) }}>
                                    <option value="">Select State</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Karnataka">Karnataka</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mt-3">
                                <Form.Label className='m-3'>Gender:</Form.Label>
                                <Form.Label htmlFor="male">Male</Form.Label>
                                &nbsp;
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                />
                                <Form.Label htmlFor="female">Female</Form.Label>
                                &nbsp;
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                />
                            </Form.Group>

                            <Form.Group align="center">
                                <Button variant='success' className='p-2' onClick={() => {
                                    alert(`Hello ${fname} ${lname} from ${state}`)
                                }
                                }>Submit</Button>
                            </Form.Group>

                        </Form>
                    </Col>

                </Row>

            </Container>

            <Alert show={show} variant="success">
                <Alert.Heading>My Alert</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

        </>
    )
}
export default Register