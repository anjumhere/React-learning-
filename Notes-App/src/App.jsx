import React, { useEffect, useState } from "react";
import InputData from "./components/InputData";
import Notes from "./components/Notes";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
      <InputData
        title={title}
        details={details}
        setDetails={setDetails}
        setTitle={setTitle}
        formHandler={formHandler}
      />
      {/* Right - Notes */}
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
