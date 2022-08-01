import Message from "./message/Message";
import data from "../../data.json";
import MessageForm from "../form/Form";
import getID from "../../utils/getId";
import { nanoid } from "nanoid";

import { useState, useEffect } from "react";
import { add, subtract } from "./functions";
import "./Comments.css";

function Comments() {
	const [comments, setComments] = useState(
		JSON.parse(localStorage.getItem("comment-data")) || data.comments
	);

	useEffect(() => {
		localStorage.setItem("comment-data", JSON.stringify(comments));
	}, [comments]);

	function addScore(id) {
		setComments((prevComments) => add(prevComments, id));
	}

	function subtractScore(id) {
		setComments((prevComments) => subtract(prevComments, id));
	}

	const sortedComments = comments.sort((comment1, comment2) => {
		return comment2.score - comment1.score;
	});

	const commentObjects = sortedComments.map((comment) => (
		<Message
			comments={comments}
			setComments={setComments}
			getID={getID}
			currentUser={data.currentUser}
			addScore={addScore}
			subtractScore={subtractScore}
			key={comment.id}
			{...comment}
		/>
	));

	return (
		<div className="comments">
			{commentObjects}
			<MessageForm
				type="new-comment"
				comments={comments}
				setComments={setComments}
				getID={() => nanoid()}
				currentUser={data.currentUser}
				variant="create"
				buttonText="send"
				{...data.currentUser}
			/>
		</div>
	);
}

export default Comments;
