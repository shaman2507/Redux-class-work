import { statusFilters } from "components/redux/constants";
import { useSelector } from "react-redux";

export const statusFilter = () => {
    const filter = useSelector(state => state.filters.status);

    return (
        <div>
            <button selected={filter === statusFilters.all}>All</button>
            <button selected={filter === statusFilters.active}>Active</button>
            <button selected={filter === statusFilters.completed}>Completed</button>
        </div>
    );
};