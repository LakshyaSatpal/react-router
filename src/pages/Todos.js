import React from "react";
import { useLoaderData } from "react-router-dom";
import { json } from "react-router-dom";

const TodosPage = () => {
  const todos = useLoaderData();

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
};

export async function todosLoader() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!response.ok) {
      throw new Response("Error in fetching Todos", {
        status: response.status,
      });
    }
    const data = await response.json();
    return json(data, { status: 200 });
  } catch (err) {
    throw new Response("Error in fetching Todos", { status: err.status });
  }
}

export default TodosPage;
