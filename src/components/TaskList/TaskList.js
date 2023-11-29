import { Task } from "components/Task/Task";
import { statusFilters } from "components/redux/constants";
import { useSelector } from "react-redux";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilter.active:
            return tasks.filter(task => !task.complited);
        case statusFilter.completed:
            return tasks.filter(task => task.complited);
        default:
            return tasks;
    }
};

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const statusFilter = useSelector(state => state.filters.status);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul>
            {visibleTasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};