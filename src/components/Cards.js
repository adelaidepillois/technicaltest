import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.magicthegathering.io/v1/cards")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        cards: result.cards
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {error, isLoaded, cards} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="component">
                    <Container>
                        <Row className="mt-5">
                            {cards?.map((cards) => (
                                <Col size={6} sm={6} md={4} key={`cards-${cards.name}`}
                                     to={`/cards/${cards.name}`}>
                                    <Card className="cards">
                                        <Card.Body>
                                            <Card.Title>{cards.name}</Card.Title>
                                            <Card.Text>
                                                {cards.text}<br/>
                                                {cards.types}<br/>
                                                <div id="rarity" className= {cards.rarity}>
                                                    {cards.rarity}<br/>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            ))}
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

