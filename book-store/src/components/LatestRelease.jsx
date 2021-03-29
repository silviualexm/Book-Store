import React from 'react';

import {Container, Row, Col, Card, Badge} from 'react-bootstrap';
import items from '../data/fantasy.json';
import CommentList from './CommentList'


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
                                items.map(item => (<>
                                    
                                    <Col key={item.asin}  xs={12} sm={6} md={4} lg={2} > 
                                        <Card key={item.asin}   onClick={()=>{<CommentList asin={item.asin} />}}>
                                            <Card.Img className="img-fluid" variant="top" src={item.img}  />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    <Badge pill variant="success">
                                                      {item.category}
                                                    </Badge>
                                                    <Badge pill variant="warning">
                                                        Price: {item.price} $
                                                    </Badge>{' '}
                                                    
                                                </Card.Text>
                                               
                                            </Card.Body>
                                         </Card>
                                    </Col></>
                                )
                                )
                            }
                        
                   
                    </Row>
                   
                </Container>      
        )
    }
   
   
}
export default Latest