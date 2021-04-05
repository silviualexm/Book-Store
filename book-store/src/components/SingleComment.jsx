import React from "react";
import { Button } from "react-bootstrap";

class SingleComment extends React.Component {
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
	deleteComment = async (props) => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.elementId,
				{
					method: "DELETE",

					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI",
					},
				}
			);
			if (response.ok) {
				alert("successfully deleted");
				this.fetchData();
			} else {
				alert("error in delete process");
			}
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<>
				<p>
					{this.props.rate} - {this.props.comment}
				</p>
				<Button
					variant="danger"
					onClick={() => this.deleteComment(this.props.elementId)}
				>
					Delete
				</Button>
			</>
		);
	}
}
export default SingleComment;
