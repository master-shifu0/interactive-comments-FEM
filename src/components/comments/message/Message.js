import Comment from "../comment/Comment";

import "./message.css";

function Message(props) {
	const mainReply = <Comment {...props} />;
	const { replies, comments, setComments, getID } = props;
	const subReplyObjects = replies.map((reply) => (
		<Comment
			comments={comments}
			setComments={setComments}
			getID={getID}
			addScore={props.addScore}
			subtractScore={props.subtractScore}
			replyingTo
			key={reply.id}
			currentUser={props.currentUser}
			{...reply}
		/>
	));

	return (
		<div className="messages grid">
			{mainReply}
			{replies.length > 0 && <div className="replies grid">{subReplyObjects}</div>}
		</div>
	);
}

export default Message;
