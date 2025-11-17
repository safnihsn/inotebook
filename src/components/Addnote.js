import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";
const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully","success");
  }; 
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a note
          <i className="fa-solid fa-note-sticky" style={{marginLeft:"10px"}}></i>
        </h2>
        <form className="my-3 text-start text-secondary text-opacity-50">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              required
              placeholder="Enter Title name here..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              required
              placeholder="Enter Description here..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              placeholder="Enter Tag here..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleClick}
            disabled={note.title.length < 1 || note.description.length <1}
            style={{ paddingLeft:"15px",paddingRight:"15px",display:"block",cursor:"pointer", width:"120px", marginTop:"10px" , marginBottom:"10px", 
            borderRadius:"4px", 
          }}
          
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
