import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=5`,
      );
      setUserData(response.data);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );

  return (
    <div className=" flex flex-col gap-10  items-center p-10 bg-gray-900 min-h-screen w-full">
      <Cards
        loading={loading}
        error={error}
        index={index}
        setIndex={setIndex}
        userData={userData}
      />
    </div>
  );
};

export default App;
