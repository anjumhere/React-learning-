import React from "react";

const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="w-full md:w-[55%] p-8 flex flex-col gap-5">
      <p className="text-[#555570] text-xs uppercase tracking-widest font-medium">
        Your Notes
      </p>

      <div className="flex flex-wrap gap-3">
        {notes.length === 0 && (
          <p className="text-[#333350] text-sm">No notes yet. Add one!</p>
        )}
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-[#1a1a26] border border-[#2a2a3e] rounded-xl p-3 w-[calc(40%-0.375rem)] flex flex-col justify-center items-center"
          >
            <p className="text-[#7c6af7] text-[20px] text-center uppercase tracking-widest font-medium mb-1">
              note
            </p>
            <h3 className="text-white font-semibold text-lg mb-1">
              {note.title}
            </h3>
            <p className="text-[#666680] text-sm leading-relaxed">
              {note.details}
            </p>
            <button
              onClick={() => {
                deleteNote(index);
              }}
              className="bg-[#7c6af7] text-white  px-9 py-1 rounded-lg mt-6"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
