export function getComment(comments, id) {
	let newComment;
	comments.forEach((comment) => {
		if (comment.id === id) {
			newComment = comment;
		} else if (comment.replies.length > 0) {
			const replies = comment.replies;
			replies.forEach((reply) => {
				if (reply.id === id) {
					newComment = comment;
				}
			});
		}
	});
	return newComment;
}

export function getReplyTo(replies, replyId) {
	let username;
	replies.forEach((reply) => {
		if (reply.id === replyId) {
			username = reply.user.username;
		}
	});
	return username;
}

export function edit(comments, newContent, id) {
	let newComments = [];
	comments.forEach((comment) => {
		if (comment.id === id) {
			comment = { ...comment, content: newContent };
		} else if (comment.replies.length > 0) {
			let newReplies = [];
			const replies = comment.replies;
			replies.forEach((reply) => {
				if (reply.id === id) {
					reply = { ...reply, content: newContent };
				}
				newReplies = [...newReplies, reply];
			});
			comment = { ...comment, replies: newReplies };
		}
		newComments = [...newComments, comment];
	});
	return newComments;
}

export function deleteComment(comments, id) {
	let comment = getComment(comments, id);

	if (comment.id === id) {
		const newComments = comments.filter((comment) => {
			return comment.id !== id;
		});
		return newComments;
	} else {
		const newReplies = comment.replies.filter((reply) => {
			return reply.id !== id;
		});
		const newComments = comments.map((oldComment) => {
			return comment.id === oldComment.id ? { ...oldComment, replies: newReplies } : oldComment;
		});
		return newComments;
	}
}

export const modalStyle = {
	overlay: { placeItems: "center", display: "grid", backgroundColor: "hsl(211, 10%, 45%, .75)" },
	content: {
		display: "grid",
		color: "hsl(211, 10%, 45%)",
		width: "min(23rem, 90%)",
		backgroundColor: "hsl(0, 0%, 100%)",
		position: "initial",
		gap: "1rem",
		borderRadius: "0.5rem",
		padding: "1.5rem",
	},
};
