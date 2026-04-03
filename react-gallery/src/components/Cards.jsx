import React from "react";

const Cards = ({ loading, error, index, setIndex, userData }) => {
  return (
    <div>
      {loading && (
        <p className="text-white text-4xl absolute top-[80%] left-[44%] ">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-red-400 text-4xl absolute top-[80%] left-[44%] ">
          {error}
        </p>
      )}

      <h1 className="   text-white text-5xl absolute top-4/5 left-[90%] bg-gray-900 px-8 py-2 rounded-lg border-2 border-green-500">
        {index}
      </h1>
      <div className="flex flex-wrap gap-5">
        {userData.map((elem, idx) => (
          <div key={elem.id} className="text-white ">
            <a
              href={elem.url}
              target="_blank"
              className="flex  flex-col justify-center items-center gap-1"
            >
              <div className="h-50 w-50 rounded-xl overflow-hidden">
                <img
                  key={elem.id}
                  className="h-full w-full object-cover transition-opacity duration-1000 opacity-0  "
                  src={elem.download_url}
                  alt={elem.author}
                  onLoad={(e) =>
                    e.target.classList.replace("opacity-0", "opacity-100")
                  }
                />
              </div>
              <h1>{elem.author}</h1>
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5 mt-10">
        <button
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400  text-black rounded-lg px-10 py-2 font-semibold"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-400   text-black rounded-lg px-10 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
