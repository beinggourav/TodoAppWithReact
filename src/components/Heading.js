import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// component to show heading in Task-list and taskDetails and Create task
const Heading = () => {
    const history = useHistory();
    const goBack = ()=>{
        history.go(-1);
    }

    const {quadrant} = useParams();

    const [heading, setHeading] = useState('');
    useEffect(() => {
        if (quadrant === 'urgentImportant') {
            setHeading('Urgent and Important tasks');
        } else if (quadrant === 'notUrgentImportant') {
            setHeading('Not Urgent and Important tasks');
        } else if (quadrant === 'urgentNotImportant') {
            setHeading('Urgent and Not Important tasks');
        } else if (quadrant === 'notUrgentNotImportant') {
            setHeading('Not Urgent and Not Important tasks');
        }
    },[quadrant]);  // dependecy quadrant is given to avoid infinite loop(due to changing of state in useEffect)

    return (
        <div className="heading">
            {heading && <h2>{heading}</h2>}
            <button onClick={goBack}>Back</button>
        </div>
    );
}
 
export default Heading;