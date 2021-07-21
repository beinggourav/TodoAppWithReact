import { Link } from "react-router-dom";

const TaskList = ({ tasks, quadrant }) => {    // grabing properties from props given in Quadrant.js while calling for this component

    // it can also be done without function
    // defining this function for Completed or not completed functionality
    const TaskView = () => {
        if (tasks[0]) {
            return (
                <div>
                    <div className="notCompleted">
                        {tasks.map((task) => {
                            if (!task.isComplete) {
                                return (
                                    <div className="preview" key={task.id}>
                                        <Link to={`${quadrant}/${task.id}`}>
                                            <h2>{task.title}</h2>
                                        </Link>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                    <div className="completed">
                        <h3>Completed Tasks:</h3>
                        {tasks.map((task) => {
                            if (task.isComplete) {
                                return (
                                    <div className="preview" key={task.id}>
                                        <Link to={`${quadrant}/${task.id}`}>
                                            <h2>{task.title}</h2>
                                        </Link>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div>No Task in this category, Click Add Task to add one</div>
            )
        }
    }

    return (
        <div className="task-list">
            <div className="add-task-btn">
                <Link to={`${quadrant}/create`} >Add Task</Link>
            </div>
            {TaskView()}
        </div>
    );
}

export default TaskList;