import editButton from '../image/editButton.svg';
import { useDispatch } from 'react-redux';
import { deleteTasks } from '../actions/deleteTasksAction';
import { addData } from '../actions/addDataAction';

const TaskCard = ({ title, description, priorityText, priority, status, id}) => {

    const dispatch = useDispatch(); 

    const modalToggle = () => {
        document.body.style.overflow = "hidden";
        dispatch({type: "EDITING_TASK"});
    }

    const deleteTask = () => {
        dispatch(deleteTasks({
            status: status,
            priority: priority,
            id: id
        }))
    }

    const editTask = () => {
        dispatch(addData({
            title: title,
            description: description,
            priorityText: priorityText,
            priority: priority,
            status: status,
            id: id
        }))
        modalToggle();
    }

    return (
        <div className="taskCard">
            <div className="top">
                <h3>{title}</h3>
                <span onClick={deleteTask}>X</span>
            </div>
            <div className="text">
                <span>{description}</span>
            </div>
            <div className="bottom">
                <img src={editButton} alt={editButton} onClick={editTask}/>
                <h4>{priorityText}</h4>
            </div>
        </div>
    );
}
  
export default TaskCard;