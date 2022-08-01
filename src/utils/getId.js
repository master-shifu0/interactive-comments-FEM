function getID(comments) {
	const commentsLength = comments.length;
	const lastComment = comments[commentsLength - 1];
	const replies = lastComment.replies;
	if (replies.length > 0) {
		return replies[replies.length - 1].id + 1;
	} else {
		return lastComment.id + 1;
	}
}

export default getID;
