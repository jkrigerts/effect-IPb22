import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {
  // Uztaisi stāvokļa mainīgo toDo
  const [toDo, setToDo] = useState({});

  useEffect(() => {
    async function getToDo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      setToDo(data);
    }
    getToDo();
  }, []);

  // const toDo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };

  return (
    <>
      <ToDo {...toDo} />
      <ToDo
        userId={toDo.userId}
        id={toDo.id}
        title={toDo.title}
        completed={toDo.completed}
      />
    </>
  );
}

export default App;
