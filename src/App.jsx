import Card from "./component/card";
import TextField from "./component/textField";
import { useEffect, useState } from "react";
import Button from "./component/button";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const url = "https://randomuser.me/api/?results=20";

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url).then((res) => res.json());
      setData(res.results);
      setCount((prev) => prev + 1);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <p>{loading && "Loading..."}</p>
      <div className="flex p-2">
        <TextField />
        <Button
          onClick=""
          type="submit"
          className="justify-content-center p-2 m-2 rounded-lg bg-gray-300"
          text="Submit"
        />
      </div>
      {data.map((user, index) => (
        <Card key={index} {...user} onClick={getData} />
      ))}
    </>
  );
}

export default App;
