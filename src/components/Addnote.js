import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";
import "./Addnote.css"; 

const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-4 addnote-card">
      <h2 className="addnote-title">📝 Add a Note</h2>
      <form className="addnote-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-semibold">
            Title
          </label>
          <input
            type="text"
            className="form-control input-field"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-semibold">
            Description
          </label>
          <textarea
            className="form-control input-field"
            id="description"
            name="description"
            rows="3"
            value={note.description}
            onChange={onChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label fw-semibold">
            Tag
          </label>
          <input
            type="text"
            className="form-control input-field"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-add"
          onClick={handleClick}
          disabled={note.title.length < 1 || note.description.length < 1}
        >
          ➕ Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
