import React from "react";
import usestate from "react";

const App = () => {
  const [book, setBook] = usestate([]);

  return <div>This is App</div>;
};

export default App;
