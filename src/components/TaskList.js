import { Link } from "react-router-dom";

const TaskList = ({tasks, quadrant, title}) => {    // grabing properties from props given in Quadrant.js while calling for this component
    return (
        <div className="Task-list">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <div className="preview" key = {task.id}>
                    <Link to={`${quadrant}/${task.id}`}>
                        <h2>{task.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TaskList;