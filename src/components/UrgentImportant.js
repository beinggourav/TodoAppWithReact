import { useLocation, useParams } from "react-router-dom";
import TaskList from "./TaskList"
import useFetch from "./useFetch";

const UrgentImportant = () => {

    const location = useLocation();
    const pathArray = location.pathname.split('/');
    // console.log(pathArray);  // it is printing three times, why?
    const category = pathArray[2];

    const { data: tasks, isLoading, error } = useFetch("http://localhost:8001/"+category);
    return (
        <div className="taskList">
            {tasks && <TaskList tasks={tasks} category={category} title="Urgent and Important tasks" />}
        </div>
    );
}

export default UrgentImportant;