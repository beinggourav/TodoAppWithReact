import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {

    const { category, id } = useParams();
    const { data: task, isLoading, error } = useFetch("http://localhost:8001/" + category + "/" + id);
    return (
        <div className="task-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading</div>}
            {task && (
                <article>
                    <h2>{task.title}</h2>
                    <p>{task.details}</p>
                </article>
            )}
        </div>
    );
}

export default TaskDetails;