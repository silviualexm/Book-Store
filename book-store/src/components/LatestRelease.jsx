import React from 'react'

import { Card, Button, Container, Col, Row} from 'react-bootstrap'
import items from '../data/fantasy.json'


class Latest extends React.Component {
    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <Col xs={12} md={6} lg={4}>
                    <h1>Latest Release</h1>
                        <p>The best books you can find on the web!</p>
                    </Col>
                </Row>
                <Row ClassName="mt-3"> 
                    <Col xs={12} md={6} lg={4}>       
                          {
                                items.map(item => (
                                    <Card  key={item.asin} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                <p>{item.category}</p>
                                                <p>Price: {item.price} $</p>
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                )
                                )
                            }
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Latest