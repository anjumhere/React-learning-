import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setNotes([...notes, { title, details }]);
    setTitle("");
    setDetails("");
  };
  const deleteNote = (index) => {
    const copyTask = [...notes];
    copyTask.splice(index, 1);
    setNotes(copyTask);
  };
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#0f0f13] font-sans">
      {/* Left - Form */}
      <div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-[#1e1e2e] p-10 flex flex-col gap-5 ">
        <h1 className="text-white text-2xl font-bold tracking-tight">
          <span className="text-[#7c6af7]">React</span> Noter
        </h1>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="bg-[#1a1a26] border border-[#2a2a3e] rounded-xl px-4 py-3 text-white placeholder:text-[#555570] outline-none text-sm"
        />

        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="What's on your mind?"
          className="bg-[#1a1a26] border border-[#2a2a3e] rounded-xl px-4 py-3 text-white placeholder:text-[#555570] outline-none text-sm min-h-28 resize-none"
        />

        <button
          onClick={formHandler}
          className="bg-[#7c6af7] hover:bg-[#6a59e0] transition text-white py-3 rounded-xl text-sm font-medium"
        >
          Add Note
        </button>
      </div>

      {/* Right - Notes */}
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
    </div>
  );
};

export default App;
