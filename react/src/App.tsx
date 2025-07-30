import { Container, List, Paper } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { AddTodo, TodoComponent, type Todo } from "./Todo";

export default () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      title: "Hello World 0",
      done: true,
    },
    {
      id: 1,
      title: "Hello World 1",
      done: true,
    },
  ]);
  const addTodo = (formData: FormData) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: formData.get("title")?.toString() ?? "",
        done: false,
      },
    ]);
  };
  const editTodos = (todo: Todo) => {
    setTodos([
      ...todos.map((e) => {
        if (e.id == todo.id) {
          return todo;
        }
        return e;
      }),
    ]);
  };
  const deleteTodos = (todo: Todo) => {
    setTodos([...todos.filter((e) => e.id != todo.id)]);
  };
  return (
    <>
      <Container>
        <AddTodo addTodo={addTodo} />
        <Paper>
          <List>
            {todos &&
              todos.map((todo) => (
                <TodoComponent
                  key={todo.id}
                  todo={todo}
                  editTodos={editTodos}
                  deleteTodos={deleteTodos}
                />
              ))}
          </List>
        </Paper>
      </Container>
    </>
  );
};
