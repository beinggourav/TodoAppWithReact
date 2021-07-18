import { useLocation, useParams } from "react-router-dom";
import TaskList from "./TaskList"
import useFetch from "./useFetch";

const UrgentImportant = () => {

    const location = useLocation();
    const category = location.pathname;

    const {data:tasks, isLoading, error} = useFetch("http://localhost:8001/UItasks");
    return (
        
        <div className="taskList">
        {tasks && <TaskList tasks = {tasks} category = {category} title = "Urgent and Important tasks" />}
        </div>
    );
}
 
export default UrgentImportant;