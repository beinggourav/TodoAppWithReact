import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {

    const { quadrant, id } = useParams();
    const { data: task, isLoading, error } = useFetch("http://localhost:8001/" + quadrant + "/" + id);

    const history = useHistory();
    const handleDelete = ()=>{
        fetch("http://localhost:8001/" + quadrant + "/" + id,{
            method:'DELETE'
        }).then(()=>{
            history.go(-1); // to go back on tasklist 
        })
    }

    return (
        <div className="task-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading</div>}
            {task && (
                <article>
                    <h2>{task.title}</h2>
                    <p><b>Description:</b> {task.details}</p>
                    <button onClick={handleDelete}>Delete Task</button>
                    <button>Mark as Complete</button>
                </article>
            )}
        </div>
    );
}

export default TaskDetails;