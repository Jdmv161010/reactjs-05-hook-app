import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación input vacio
    if (description.trim().length <= 1) {
      return;
    }

    //Crear nuevo todo de acuerdo a la entrada del input
    //Asocia el atributo desc del objeto con el
    //Atributo description del objeto values que retorna
    //el hook useForm (description es el value del input)
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    //Se encarga de asociar la acción con el reducer
    handleAddTodo(newTodo);
    //Limpia el formulario
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          /* Asocia el atributo description del objeto values del useForm
          con el value del input
          Evalua cuando hay cambios y ejecuta el handleInputChange
          extraido desde el useForm, el cual se encarga de agregar
          la nueva entrada en el value del componente */
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary mt-1 btn-block" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
