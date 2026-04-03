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
          className="bg-amber-400  text-black rounded-lg px-10 py-2 font-semibold active:scale-95"
        >
          Prev
        </button>
        <h2 className="text-white text-lg">Page {index}</h2>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-400   text-black rounded-lg px-10 py-2 font-semibold active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
