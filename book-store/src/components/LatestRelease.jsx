import React from "react";
import items from "../data/scifi.json";
import { Button, Carousel, Card, Col, Container, Row } from "react-bootstrap";

class LatestRelease extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					{/* <Carousel className="col-xs-4 w-50em h-100!important"> */}
					{items.map((item) => (
						<Col xs={6} md={4} lg={2}>
							<Card key={item.asin}>
								<Card.Img variant="top" src={item.img} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									{/* <Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text> */}
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>

						// <Carousel.Item key={item.asin}>
						// 	<img
						// 		className="d-block w-100"
						// 		src={item.img}
						// 		alt={item.title}
						// 	/>
						// 	<Carousel.Caption>
						// 		<h3>{item.title}</h3>
						// 		<p>
						// 			{item.category} - {item.price}
						// 		</p>
						// 	</Carousel.Caption>
						// </Carousel.Item>
					))}
					{/* </Carousel> */}
				</Row>
			</Container>
		);
	}
}

export default LatestRelease;
