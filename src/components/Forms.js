import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default class Forms extends React.Component {


    render() {

        return (
            <div className="component">
                <Container>
                    <Row>
                        <Col size={12} sm={12} md={12}>
                            <Form className="forms">
                                <Row className="align-items-center d-flex">
                                    <Col size={3} sm={3} md={3}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control type="type" placeholder="Type"/>
                                        </Form.Group>
                                    </Col>

                                    <Col size={3} sm={3} md={3}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Rareté</Form.Label>
                                            <Form.Control type="rare" placeholder="Rarity"/>
                                        </Form.Group>
                                    </Col>
                                    <Col size={3} sm={3} md={3}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control type="name" placeholder="Name"/>
                                        </Form.Group>
                                    </Col>

                                    <Col size={3} sm={3} md={3}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
            ;
    }
}

