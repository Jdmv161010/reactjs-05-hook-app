import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./styles.css";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender react",
//     done: false,
//   },
// ];

//Función de arranque para Reducer
//Lee el localstorage, en caso de que no tenga nada guardado
//retorna un arreglo vacio de lo contrario retorna el todo
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //Crea el nuevo Reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Crear nueva action utilizada por el Reducer
  //Se encarga de asociar la acción con el reducer
  const handleDelete = (todoId) => {
    dispatch({
      type: "remove",
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  //Se encarga de asociar la acción con el reducer
  //Crear nueva action utilizada por el Reducer
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
