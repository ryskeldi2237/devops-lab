import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://54.241.111.118:3001/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend is not working");
      });
  }, []);

  return (
    <div>
      <h1>DevOps Lab</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
