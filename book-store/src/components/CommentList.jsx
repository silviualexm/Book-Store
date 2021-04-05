import React from "react";
import { Form } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
	state = {
		searchFilter: "",
	};
	render() {
		return (
			<>
				<Form>
					<Form.Label>Here you can search for a comment: </Form.Label>
					<Form.Control
						type="search"
						placeholder="search"
						value={this.state.searchFilter}
						onChange={(e) => this.setState({ searchFilter: e.target.value })}
					/>
				</Form>
				<ul>
					{this.props.comments
						.filter((a) =>
							a.comment.toLowerCase().includes(this.state.searchFilter)
						)
						.map((comm) => (
							<li key={comm._id}>
								<SingleComment
									comment={comm.comment}
									rate={comm.rate}
									elementId={comm.elementId}
								/>
							</li>
						))}
				</ul>
			</>
		);
	}
}
export default CommentList;
