import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="cards">
            <div className="card UrgentImportant">
                <Link to={'/TodoAppWithReact/urgentImportant'}>
                    <h2>Urgent and Important</h2>
                    <p>Here is your Urgent and Important tasks</p>
                    <p>Click to have a look</p>
                    <h3>Priority: Highest</h3>
                </Link>

            </div>
            <div className="card NotUrgentImportant">
                <Link to='/TodoAppWithReact/notUrgentImportant'>
                    <h2>Not Urgent and Important</h2>
                    <p>Here is your Not Urgent and Important tasks</p>
                    <p>Click to have a look</p>
                    <h3>Priority: High</h3>
                </Link>
            </div>
            <div className="card UrgentNotImportant">
                <Link to='/TodoAppWithReact/urgentNotImportant'>
                    <h2>Urgent and Not Important</h2>
                    <p>Here is your Urgent and Not Important tasks</p>
                    <p>Click to have a look</p>
                    <h3>Priority: Medium</h3>
                </Link>
            </div>
            <div className="card NotUrgentNotImportant">
                <Link to='/TodoAppWithReact/notUrgentNotImportant'>
                    <h2>Not Urgent and Not Important</h2>
                    <p>Here is your neither Urgent nor Important tasks</p>
                    <p>Click to have a look</p>
                    <h3>Priority: Low</h3>
                </Link>

            </div>
        </div>

    );
}

export default Home;