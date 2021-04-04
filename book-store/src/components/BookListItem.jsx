import React from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookListItem extends React.Component {
	state = {
		selected: "false",
	};

	render() {
		return (
			<Card>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
					{/* <Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text> */}
					<Button
						variant="primary"
						onClick={() => {
							this.setState({ selected: "true" });
						}}
					>
						Detail
					</Button>
					{this.state.selected === "true" && (
						// console.log(this.props.book.asin)
						<CommentArea elementId={this.props.book.asin} />
					)}
				</Card.Body>
			</Card>
		);
	}
}

export default BookListItem;
