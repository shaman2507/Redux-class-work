

// const appState = {
//   tasks: [],
//   filters: {
//     status: "all",
//   },
// };

import { TaskList } from "./TaskList/TaskList";

// // Імпортуємо хук
// import { useSelector } from "react-redux";
// const MyComponent = () => {
//   // Отримуємо необхідну частину стану
//   const value = useSelector(state => state.some.value);
// };

export const App = () => {
  return (
    <div>
      <TaskList />
    </div>
  );
};
