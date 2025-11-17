import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3 bg-secondary bg-opacity-10 shadow-lg">
      <div className="card my-3  bg-primary bg-opacity-75 text-white border-0 rounded-3 gap-3 ">
        <div className="card-body align-items-center ">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text align-items-center">
            <small className="text-muted">Tag: {note.tag}</small>
          </p>
          <div className="d-flex justify-content-between align-items-center">
          <i
            className="fa-regular fa-trash-can mx-2 me-auto"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully","success");
            }}
          ></i>
          <i className="fa-solid fa-pen mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
