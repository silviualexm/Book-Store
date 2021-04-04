import React from "react";

function SingleComment(props) {
	return (
		<h5>
			{props.rate} - {props.comment}
		</h5>
	);
}
export default SingleComment;
