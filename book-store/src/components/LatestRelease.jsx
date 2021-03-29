import React from 'react';

import {Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import items from '../data/fantasy.json';
import CommentArea from './CommentArea'


class Latest extends React.Component {
    state = {
        selected: null,
    }

  
   
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
                                                <Badge variant="info">{item.category}</Badge>
                                                <Card.Text> 
                                                    Price: {item.price} $
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => this.setState({selected: item.asin})}>Details</Button>
                                                
                                            </Card.Body>
                                         </Card>
                                         
                                         
                                    </Col>
                                )
                                )
                            }
                            {this.state.selected && < CommentArea asin={this.state.selected} />}  
                   
                    </Row>
                   
                   
        
                </Container>
               
        )
    }    
    
        
    
}
export default Latest