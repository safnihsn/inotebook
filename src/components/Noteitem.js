import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">
            <small className="text-muted">Tag: {note.tag}</small>
          </p>
          <i
            className="fa-regular fa-trash-can mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully","success");
            }}
          ></i>
          <i className="fa-solid fa-pen mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
