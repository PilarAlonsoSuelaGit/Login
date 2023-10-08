import { CSSProperties, useState } from "react";
import { TaskTextProperties } from "../typings/task-text-properties";
import { Link } from "react-router-dom";
import { SpanProperties } from "../typings/span-task";

function spanTask(properties: SpanProperties) {
  const spanStyle = {
    marginLeft: properties.marginLeft || "30px",
    padding: properties.padding || "5px",
    borderRadius: properties.borderRadius || "50%",
    transition: properties.transition || "background-color 0.3s ease",
  };
  return spanStyle;
}

function TaskText(properties: TaskTextProperties) {
  const fontSize = properties.fontSize;
  const textOptions = {
    fontSize,
    color: properties.color || "grey",
    textAlign: properties.align || "center",
    marginTop: "25px",
  };

  //garantizamos que las propiedades son de SpanProperties
  const spanStyle = spanTask(properties as SpanProperties);

  const handleDelete = () => {
    if (properties.onDelete && properties.index !== undefined) {
      properties.onDelete(properties.index);
    }
  };
  const handleCopy = () => {
    if (properties.onCopy && properties.index !== undefined) {
      properties.onCopy(properties.index);
    }
  };

  return (
    <p className="taskText" style={textOptions}>
      {properties.text}
      <span className="spanTask" style={spanStyle} onClick={handleDelete}>
        x
      </span>
      <span className="spanTask" style={spanStyle} onClick={handleCopy}>
        x
      </span>
    </p>
  );
}

export function ToDoList() {
  const [taskText, setTaskText] = useState(""); // Estado para almacenar el texto de la tarea
  const [tasks, setTasks] = useState<string[]>([]); // Estado para almacenar la lista de tareas

  const addItem = () => {
    if (taskText.trim() !== "") {
      // Verificar que el texto no esté vacío o solo contenga espacios en blanco
      setTasks([...tasks, taskText]); // Agregar el texto de la tarea al estado de tareas
      setTaskText(""); // Limpiar el input después de agregar la tarea
    }
  };

  const deleteItem = (indexToDelete: number) => {
    // Esta función se llama cuando se quiere eliminar una tarea
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };
  //queremos añadir una tarea a la lista
  const copyItem = (indexToCopy: number) => {
    const taskToCopy = tasks[indexToCopy];

    // Agregar la tarea copiada a la lista
    setTasks([...tasks, taskToCopy]);
  };

  return (
    <div className="containerToDo">
      <input
        className="textBox"
        type="text"
        placeholder="Add your task here"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Actualizar el estado con el texto ingresado
      />
      <button className="addTaskBtn" onClick={addItem}>
        Add
      </button>
      <div className="containerEditableTasks">
        {/* Recorrer la lista de tareas */}
        {tasks.map((task, index) => (
          <TaskText
            key={index}
            text={task}
            fontSize="10px"
            onDelete={(index) => deleteItem(index)}
            onCopy={(index) => copyItem(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
