export function add(prevComments, id) {
	const newComments = [];

	for (let i = 0; i < prevComments.length; i++) {
		const comment = prevComments[i];

		if (comment.id === id) {
			newComments.push({ ...comment, score: comment.score + 1 });
		} else if (comment.replies.length > 0) {
			const newReplies = [];
			const replies = comment.replies;
			replies.forEach((reply) => {
				if (reply.id === id) {
					newReplies.push({ ...reply, score: reply.score + 1 });
				} else {
					newReplies.push(reply);
				}
			});
			newComments.push({ ...comment, replies: newReplies });
		} else {
			newComments.push(comment);
		}
	}

	return newComments;
}

export function subtract(prevComments, id) {
	const newComments = [];

	for (let i = 0; i < prevComments.length; i++) {
		const comment = prevComments[i];

		if (comment.id === id) {
			newComments.push({ ...comment, score: comment.score - 1 });
		} else if (comment.replies.length > 0) {
			const newReplies = [];
			const replies = comment.replies;
			replies.forEach((reply) => {
				if (reply.id === id) {
					newReplies.push({ ...reply, score: reply.score - 1 });
				} else {
					newReplies.push(reply);
				}
			});
			newComments.push({ ...comment, replies: newReplies });
		} else {
			newComments.push(comment);
		}
	}

	return newComments;
}
