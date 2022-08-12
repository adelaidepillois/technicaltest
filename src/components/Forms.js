import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'

const myData = [
    {text: 'Books', value: 1},
    {text: 'Movies, Music & Games', value: 2},
    {text: 'Electronics & Computers', value: 3},
    {text: 'Home, Garden & Tools', value: 4},
    {text: 'Health & Beauty', value: 5},
    {text: 'Toys, Kids & Baby', value: 6},
    {text: 'Clothing & Jewelry', value: 7},
    {text: 'Sports & Outdoors', value: 8},
    {text: 'Automotive & Industrial', value: 9}
];

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
                                        <Form.Group className="mb-3" controlId="type">
                                            <Form.Label>Type</Form.Label>
                                            <Select
                                                data={myData}
                                                selectMultiple={true}
                                                touchUi={false}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col size={3} sm={3} md={3}>
                                        <Form.Group className="mb-3"> <Form.Label>Rareté</Form.Label>
                                            <Form.Select>
                                                <option>Common</option>
                                                <option>Uncommon</option>
                                                <option>Rare</option>
                                                <option>Sythic rare</option>
                                                <option>Special</option>
                                                <option>Basic land</option>
                                            </Form.Select>
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

