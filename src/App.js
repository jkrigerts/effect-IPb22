import ToDo from "./ToDo";

function App() {
  const toDo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

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
