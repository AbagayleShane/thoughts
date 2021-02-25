import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const [isExpanded, setIsExpand] = useState(false);

	function handleClick() {
		setIsExpand(true);
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	}

	function submitNote(event) {
		setNote({
			title: "",
			content: "",
		});
		props.onAdd(note);
		event.preventDefault();
	}
	return (
		<div>
			<form onClick={handleClick} className="create-note">
				{isExpanded && (
					<input
						autoComplete="off"
						name="title"
						value={note.title}
						onChange={handleChange}
						placeholder="(Name your thought)"
					/>
				)}

				<textarea
					name="content"
					value={note.content}
					onChange={handleChange}
					placeholder={
						isExpanded ? "and let it out..." : "What's on your mind?"
					}
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded ? true : false}>
					<Fab fontSize="small" onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
