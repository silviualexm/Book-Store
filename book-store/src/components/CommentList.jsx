import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList(props) {
	return (
		<ListGroup>
			{props.comments.map((comm) => (
				<ListGroup.Item key={comm._id}>
					<SingleComment comment={comm.comment} rate={comm.rate} />
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}
export default CommentList;
