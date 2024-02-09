import { useState, useEffect } from "react";

import {
  Container,
  BackgroundHalf,
  InputContent,
  Title,
  Line,
  TasksContent,
  TaskUl,
  TaskLi,
  ButtonComplete,
  Footer,
} from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { GoPlus } from "react-icons/go";
import { FaTrashAlt, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export function Home() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  });
  const [input, setInput] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function handleComplete(index) {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Container>
        <BackgroundHalf />
        <InputContent>
          <Title>ToDo List</Title>
          <Line />
          <form onSubmit={handleAddTask}>
            <Input
              icon={GoPlus}
              type="text"
              placeholder={"Create a new todo..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </InputContent>

        {tasks.length > 0 && (
          <TasksContent>
            <TaskUl>
              {tasks.map((task, index) => (
                <TaskLi
                  key={index}
                  completed={task.completed ? "true" : undefined}
                >
                  <div>
                    <ButtonComplete onClick={() => handleComplete(index)}>
                      {task.completed ? (
                        <FaRegCheckCircle size={25} color="#787fac68" />
                      ) : (
                        <FaRegCircle size={25} color="#787fac68" />
                      )}
                    </ButtonComplete>
                    {task.text}
                  </div>
                  <Button
                    onClick={() => handleDelete(index)}
                    icon={FaTrashAlt}
                  />
                </TaskLi>
              ))}
            </TaskUl>
          </TasksContent>
        )}
      </Container>

      <Footer>
        Coded by&nbsp;<a href="https://github.com/danieltinois">Daniel T.</a>
      </Footer>
    </>
  );
}
