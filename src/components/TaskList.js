import { Link } from "react-router-dom";

const TaskList = ({ tasks, quadrant }) => {    // grabing properties from props given in Quadrant.js while calling for this component
    
    return (
        <div className="task-list">
            <div className="add-task-btn">
                <Link to={`${quadrant}/create`} >Add Task</Link>
            </div>
            {!tasks[0] && <div>No Task in this category, Click Add Task to add one</div>}
            {tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <Link to={`${quadrant}/${task.id}`}>
                        <h2>{task.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TaskList;