import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./Counter";
import MyInput from "./MyInput";
import MyCheckBox from "./MyCheckBox";
import { Form, FormNestedObject, FormObject } from "./Form";
import Counters from "./Counters";
import AppTodo from "./app_to_do/AppTodo";
import TodoList from "./TodoList";
import ResetApp from "./ResetApp";
import CountApp from "./count_app/CountApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <MyInput /> */}
    {/* <MyCheckBox /> */}
    {/* <Form /> */}
    {/* <FormNestedObject /> */}
    {/* <Counters /> */}

    {/* <AppTodo /> */}
    {/* <TodoList /> */}
    {/* <ResetApp /> */}
    <CountApp />
  </StrictMode>
);
