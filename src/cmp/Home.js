import React, { Component } from 'react'
import { Container, Row, Col, Media, Nav, Item, Link, Form, Button } from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
    </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={6} md={6}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col xs={6} md={6}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
   </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col xs={6} md={4}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
   </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col xs={6} md={4}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
   </p>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={12} md={12}>
                            <Media>

                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
    </p>
                                </Media.Body>
                            </Media></Col>
                    </Row>
                </Container>

                <Container fluid="sm">
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                        </Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="lg" type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control size="lg" as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Example multiple select</Form.Label>
                            <Form.Control size="lg" size="lg" as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Home
