import { Link } from "react-router-dom";
import useFetch from "./useFetch";


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
                <h2>Not Urgent and Important</h2>
                <p>Here is your Not Urgent and Important tasks</p>
                <p>Click to have a look</p>
                <h3>Priority: High</h3>
            </div>
            <div className="card UrgentNotImportant">
                <h2>Urgent and Not Important</h2>
                <p>Here is your Urgent and Not Important tasks</p>
                <p>Click to have a look</p>
                <h3>Priority: Medium</h3>
            </div>
            <div className="card NotUrgentNotImportant">
                <h2>Not Urgent and Not Important</h2>
                <p>Here is your neither Urgent nor Important tasks</p>
                <p>Click to have a look</p>
                <h3>Priority: Low</h3>
            </div>
        </div>
        
    );
}
 
export default Home;