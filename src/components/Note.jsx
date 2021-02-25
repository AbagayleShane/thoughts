import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button
				onClick={() => {
					props.onDelete(props.id);
				}}
			>
				<Zoom in={true}>
					<DeleteOutlineIcon fontSize="small" />
				</Zoom>
			</button>
		</div>
	);
}

export default Note;
