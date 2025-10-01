import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import noteContext from "../context/notes/noteContext";
import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Notes.css"; 

const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, [getNotes, navigate]);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated successfully", "success");
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  return (
    <>
      <Addnote showAlert={props.showAlert} />

      {/* Hidden trigger for modal */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className="modal fade custom-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg">
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-4 fw-bold text-primary"
                id="exampleModalLabel"
              >
                ✏️ Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="custom-form">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label fw-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="edescription"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control input-field"
                    id="edescription"
                    name="edescription"
                    rows="3"
                    value={note.edescription}
                    onChange={onChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label fw-semibold">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-light rounded-pill px-4 shadow-sm"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary rounded-pill px-4 shadow-sm"
                disabled={note.etitle.length < 1 || note.edescription.length < 1}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes List */}
      <div className="row my-4 notes-section">
        <h2 className="notes-title">Your Notes</h2>
        <div className="container">
          {notes.length === 0 && "No notes to display."}
        </div>

        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
