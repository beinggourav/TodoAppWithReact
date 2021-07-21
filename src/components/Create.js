import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const Create = () => {

    const {quadrant} = useParams();

    // using hook useState so that we can update the values in dom and add to database
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [isComplete, setComplete] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const task = {title, details, isComplete};

        setIsAdding(true);
        fetch("http://localhost:8001/" + quadrant, {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(task)
        }).then(()=>{
            setIsAdding(false);
            history.push('/TodoAppWithReact/' + quadrant);
        })
    }

    return (

        <div className="create">
            <h2>Add a new Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label>Task Description</label>
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required ></textarea>
                { !isAdding && <button>Add Task</button>}
                { isAdding && <button>Adding Task...</button>}
            </form>
        </div>
    );
}

export default Create;