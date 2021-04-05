import React from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends React.Component {
	state = {
		comments: [],
		comment: {
			comment: "",
			rate: 1,
			elementId: "",
		},
	};

	fetchData = async (props) => {
		try {
			let resp = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.elementId,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI",
					},
				}
			);
			let comments = await resp.json();
			console.log(comments);
			this.setState({
				comments: comments,
			});
			console.log(this.state.comments);
		} catch (error) {
			console.log(error);
		}
	};

	submitComment = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.comment),
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI",
					},
				}
			);
			if (response.ok) {
				alert("Comment saved");
				this.setState({
					comment: {
						comment: "",
						rate: 1,
						elementId: "",
					},
				});
				this.fetchData();
			} else {
				alert("error");
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<h4>Add a comment</h4>;
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						this.submitComment();
					}}
				>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Your comment here: </Form.Label>
						<Form.Control
							type="text"
							placeholder="your comment"
							value={this.state.comment.comment}
							onChange={(e) => {
								this.setState({
									comment: {
										...this.state.comment,
										comment: e.target.value,
										elementId: this.props.elementId,
									},
								});
							}}
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Rate</Form.Label>
						<Form.Control
							as="select"
							value={this.state.comment.rate}
							onChange={(e) => {
								this.setState({
									comment: { ...this.state.comment, rate: e.target.value },
								});
							}}
						>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</>
		);
	}
}

export default AddComment;
