import { v4 as uuidv4 } from "uuid";

import { useDispatch } from 'react-redux';
import { addTask } from '../../actions/addTaskAction';

import { useState } from 'react';

const AddTask = () => {

    const dispatch = useDispatch();
    const [submitedState, setsubmitedState] = useState({
        title: "",
        description: "",
        priorityText: "high",
        priority: 0,
        status: 0,
        id: uuidv4()
    });

    const modalToggle = () => {
        dispatch({type: "ADDING_TASK"});
        document.body.style.overflow = "auto";
        setsubmitedState({
            ...submitedState,
            id: uuidv4(),
            title: "Example task",
            description: "Click the button and create your own task",
        })
    }

    const submitState = () => {
        if(submitedState.title !== "" && submitedState.description !== ""){
            dispatch(addTask(submitedState));
            modalToggle();
        }
    }

    const submitTitle = (e) => {
        setsubmitedState({
            ...submitedState,
            title: e.target.value
        })
    }
    const submitDescription = (e) => {
        setsubmitedState({
            ...submitedState,
            description: e.target.value
        })
    }

    const submitStatus = (e) => {
        setsubmitedState({
            ...submitedState,
            status: Number(e.target.value)
        })
    }

    const submitPriority = (e) => {
        let priority;
        switch(e.target.value){
            case "high":
                priority = 0;
                break;
            case "normal":
                priority = 1;
                break;
            case "low":
                priority = 2;
                break;
            default:
                priority = 0;
                break;
        }
        setsubmitedState({
            ...submitedState,
            priorityText: e.target.value,
            priority: priority,
        })
    }

    return (
        <div className="modal" onClick={modalToggle}>
            <div className="form" onClick={e => e.stopPropagation()}> 
                <div className="modalTop">
                    <h1>Add your new task</h1>
                </div>
                <div className="inputText" >
                    <h2>Task's title:</h2>
                    <input type="text" placeholder="title" value={submitedState.title} onChange={submitTitle}/>
                </div>
                <div className="inputText" >
                    <h2>Task's description:</h2>
                    <input type="text" placeholder="description" value={submitedState.description}  onChange={submitDescription}/>
                </div>
                <div className="modalBottom">
                    <div className="inputRad">
                        <h2>Task's status:</h2>
                        <div onChange={submitStatus}>
                            <div>
                                <input type="radio" id="toDo" value="0" name="status" defaultChecked="checked"/>
                                <label htmlFor="toDo">To do</label>
                            </div>
                            <div>
                                <input type="radio" id="doing" value="1" name="status"/>
                                <label htmlFor="doing">Doing</label>
                            </div>
                            <div>
                                <input type="radio" id="done" value="2" name="status"/>
                                <label htmlFor="done">Done</label>
                            </div>
                        </div>
                    </div>
                    <div className="inputRad">
                        <h2>Task's priority:</h2>
                        <div onChange={submitPriority}>
                            <div>
                                <input type="radio" id="high" value="high" name="priority" defaultChecked="checked"/>
                                <label htmlFor="high">High</label>
                            </div>
                            <div>
                                <input type="radio" id="normal" value="normal" name="priority" />
                                <label htmlFor="normal">Normal</label>
                            </div>
                            <div>
                                <input type="radio" id="low" value="low" name="priority" />
                                <label htmlFor="low">Low</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="sub" onClick={submitState}><b>SUBMIT</b></button>
                    <button className="can" onClick={modalToggle}><b>CANCEL</b></button>
                </div>
            </div>
        </div>
    );
}
  
export default AddTask;