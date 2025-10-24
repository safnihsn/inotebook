import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const getTagColor = (tag) => {
    const colors = {
      work: "bg-blue-100 text-blue-800",
      personal: "bg-green-100 text-green-800",
      learning: "bg-purple-100 text-purple-800",
      important: "bg-red-100 text-red-800",
      ideas: "bg-yellow-100 text-yellow-800",
      default: "bg-gray-100 text-gray-800"
    };
    return colors[tag?.toLowerCase()] || colors.default;
  };

  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 h-full border border-gray-100 hover:border-blue-200">
        <div className="flex justify-between items-start mb-3">
          <h5 className="text-lg font-semibold text-gray-800 flex-1 pr-2" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {note.title}
          </h5>
          <div className="flex gap-2">
            <button
              onClick={() => updateNote(note)}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors flex-shrink-0"
              aria-label="Edit note"
              title="Edit note"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
              className="p-2 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
              aria-label="Delete note"
              title="Delete note"
            >
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {note.description}
        </p>

        {note.tag && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTagColor(note.tag)}`}>
            {note.tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default Noteitem;