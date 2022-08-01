import { useState } from "react";
import Button from "../button/Button";
import { getComment, getReplyTo } from "../comments/comment/utils";

import "./Form.css";

function MessageForm(props) {
	const { currentUser, variant, comments, setComments, getID, replyId, setIsReplying } = props;
	const [comment, setComment] = useState("");

	function handleChange(event) {
		let { value } = event.target;
		setComment(value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (props.type === "new-comment") {
			const newComment = {
				id: getID(comments),
				content: comment,
				score: 0,
				user: currentUser,
				replies: [],
			};
			setComments((prevComments) => [...prevComments, newComment]);
		} else if (props.type === "reply") {
			const repliedTo = getComment(comments, replyId);
			const replies = repliedTo.replies;
			const newReply = {
				id: getID(comments),
				content: comment,
				createdAt: "now",
				score: 0,
				replyingTo: getReplyTo(replies, replyId),
				user: currentUser,
			};

			repliedTo.replies.push(newReply);

			let newComments = [];
			setComments((prevComments) => {
				for (let i = 0; i < prevComments.length; i++) {
					const comment = prevComments[i];
					if (repliedTo.id === comment.id) {
						newComments = [...newComments, repliedTo];
					} else {
						newComments = [...newComments, comment];
					}
				}
				return newComments;
			});
			setIsReplying((prevState) => !prevState);
		}
		setComment("");
	}
	return (
		<form onSubmit={handleSubmit} className="create-form grid">
			<img alt="" src={process.env.PUBLIC_URL + props.image.png} />

			<textarea
				name="message"
				value={comment}
				type="text"
				placeholder="Add a comment"
				onChange={handleChange}
			/>
			<Button variant={variant} text={props.buttonText} />
		</form>
	);
}

export default MessageForm;
