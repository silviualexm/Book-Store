import React from 'react';

import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import items from '../data/fantasy.json';
import Comment from './CommentArea'


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
                    <Row className="mt-3"> 
                         
                          {
                                items.map(item => (
                                    <Col xs={12} sm={6} md={4} lg={2} key={item.asin} > 
                                        <Card  key={item.asin}>
                                            <Card.Img className="img-fluid" variant="top" src={item.img}  />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.category}
                                                    Price: {item.price} $
                                                </Card.Text>
                                                <Button variant="primary" onClick="handleClick(e)">Details</Button>
                                            </Card.Body>
                                         </Card>
                                    </Col>
                                )
                                )
                            }
                        
                   
                    </Row>
                </Container>
                const handleClick = () => {
            
                }
            
        )

        
    }
}
export default Latest