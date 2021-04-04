import React from "react";
import items from "../data/scifi.json";
import { Col, Container, Form, Row } from "react-bootstrap";
import BookListItem from "./BookListItem";

class LatestRelease extends React.Component {
	state = {
		searchFilter: "",
		selected: "false",
	};

	// componentDidUpdate(prevState) {
	// 	if (prevState.selected !== this.state.selected) {
	// 		this.setState({ selected: "true" });
	// 	}
	// }
	render() {
		return (
			<Container>
				<Row>
					<Form>
						<Form.Label>Here you can search for a specific book: </Form.Label>
						<Form.Control
							type="search"
							placeholder="search"
							value={this.state.searchFilter}
							onChange={(e) => this.setState({ searchFilter: e.target.value })}
						/>
					</Form>
				</Row>
				<Row>
					{/* <Carousel className="col-xs-4 w-50em h-100!important"> */}
					{items
						.filter((a) =>
							a.title.toLowerCase().includes(this.state.searchFilter)
						)
						.map((item) => (
							<Col xs={6} md={4} lg={2} key={item.asin}>
								<BookListItem book={item} />
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
