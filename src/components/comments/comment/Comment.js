import Counter from "../counter/Counter";
import Icon from "../../icons/Icon";
import Modal from "react-modal";
import { useState } from "react";
import "./comment.css";

import MessageForm from "../../form/Form";
import Button from "../../button/Button";
import { deleteComment, edit, modalStyle } from "./utils";

Modal.setAppElement("#root");

function Comment(props) {
	const { comments, setComments, getID, id, user, currentUser } = props;

	const [isReplying, setIsReplying] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const isCurrentUser = user.username === currentUser.username;

	function setReply() {
		setIsReplying((prevReplying) => !prevReplying);
	}
	function setEdit() {
		setIsEditing((prevEditing) => !prevEditing);
	}
	function editForm(newContent) {
		setComments(edit(comments, newContent, id));
	}

	return (
		<div className="grid-1">
			<Modal style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<h2 className="delete--header">Delete comment</h2>
				<p className="delete--paragraph">
					Are you sure you want to delete this comment? This will remove the comment and can't be
					undone
				</p>
				<div className="modal--buttons">
					<Button onClick={() => setModalIsOpen(false)} variant="cancel" text="no, cancel" />
					<Button
						onClick={() => setComments(deleteComment(comments, id))}
						variant="delete"
						text="yes, delete"
					/>
				</div>
			</Modal>
			<div className="comment grid">
				<Counter
					addScore={props.addScore}
					subtractScore={props.subtractScore}
					id={props.id}
					score={props.score}
					onClick={props.onClick}
				/>

				<div className="comment--about flex">
					<img
						className="profile-image"
						alt=""
						src={process.env.PUBLIC_URL + props.user.image.png}
					/>
					<p className="username">{props.user.username}</p>

					{isCurrentUser && <div className="user">you</div>}

					<p className="created-at">{props.createdAt}</p>
				</div>
				{isCurrentUser ? (
					<div className="comment--icons flex-1">
						<Icon delete onClick={() => setModalIsOpen(true)} /> <Icon setEdit={setEdit} edit />
					</div>
				) : (
					<div className="comment--icons flex-1">
						<Icon setReply={setReply} reply />
					</div>
				)}
				{isEditing && isCurrentUser ? (
					<form
						onSubmit={(event) => {
							event.preventDefault();
							editForm(event.target.children[0].value);
							setEdit();
						}}
						className="update-form content grid-1"
					>
						<textarea defaultValue={props.content} />
						<Button variant="update" text="update" />
					</form>
				) : (
					<p className="content">
						{props.replyingTo && <span className="replying-to">@{props.replyingTo} </span>}
						{props.content}
					</p>
				)}
			</div>
			{isReplying && (
				<MessageForm
					comments={comments}
					setComments={setComments}
					getID={getID}
					variant="create"
					currentUser={props.currentUser}
					buttonText="reply"
					image={props.currentUser.image}
					type="reply"
					replyId={props.id}
					isReplying={isReplying}
					setIsReplying={setIsReplying}
				/>
			)}
		</div>
	);
}
export default Comment;
