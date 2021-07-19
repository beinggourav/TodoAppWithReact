import { useParams } from "react-router-dom";
import TaskList from "./TaskList"
import useFetch from "./useFetch";

const Quadrant = () => {

    const {quadrant} = useParams(); // using quadrant so that we can use this component for all four categories
    // console.log(quadrant); // printing 4 times, why?
    
    const { data: tasks, isLoading, error } = useFetch("http://localhost:8001/"+quadrant);
    return (
        <div className="taskList">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div> }
            {tasks && <TaskList tasks={tasks} quadrant={quadrant} title="Urgent and Important tasks" />}
        </div>
    );
}

export default Quadrant;