import React from "react";

const InputData = ({ title, setTitle, details, setDetails, formHandler }) => {
  return (
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
  );
};

export default InputData;
