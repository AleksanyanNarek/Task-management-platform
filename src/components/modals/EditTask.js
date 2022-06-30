import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../actions/addTaskAction';
import { deleteTasks } from '../../actions/deleteTasksAction';

import { useState } from 'react';

const EditTask = () => {

    const dispatch = useDispatch();
    const changingData = useSelector((state) => state.changingData);
    const [changedState, setchangedState] = useState({
        title: changingData.title,
        description: changingData.description,
        priorityText: "high",
        priority: 0,
        status: 0,
        id: changingData.id
    });

    const modalToggle = () => {
        dispatch({type: "EDITING_TASK"});
        document.body.style.overflow = "auto";
    } 

    const changeState = () => {
        if(changedState.title !== "" && changedState.description !== ""){
            dispatch(deleteTasks({
                status: changingData.status,
                priority: changingData.priority,
                id: changingData.id
            }));
            dispatch(addTask(changedState));
            modalToggle();
        }
    }

    const changeTitle = (e) => {
        setchangedState({
            ...changedState,
            title: e.target.value
        })
    }
    const changeDescription = (e) => {
        setchangedState({
            ...changedState,
            description: e.target.value
        })
    }

    const changeStatus = (e) => {
        setchangedState({
            ...changedState,
            status: Number(e.target.value)
        })
    }

    const changePriority = (e) => {
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
        setchangedState({
            ...changedState,
            priorityText: e.target.value,
            priority: priority,
        })
    }

    return (
        <div className="modal" onClick={modalToggle}>
            <div className="form" onClick={e => e.stopPropagation()}> 
                <div className="modalTop">
                    <h1>Change your task</h1>
                </div>
                <div className="inputText" >
                    <h2>Task's title:</h2>
                    <input type="text" placeholder="title" value={changedState.title} onChange={changeTitle}/>
                </div>
                <div className="inputText" >
                    <h2>Task's description:</h2>
                    <input type="text" placeholder="description" value={changedState.description}  onChange={changeDescription}/>
                </div>
                <div className="modalBottom">
                    <div className="inputRad">
                        <h2>Task's status:</h2>
                        <div onChange={changeStatus}>
                            <div>
                                <input type="radio" id="toDo" value="0" name="status" defaultChecked="checked"/>
                                <label htmlFor="toDo">To do</label>
                            </div>
                            <div>
                                <input type="radio" id="doing" value="1" name="status" />
                                <label htmlFor="doing">Doing</label>
                            </div>
                            <div>
                                <input type="radio" id="done" value="2" name="status" />
                                <label htmlFor="done">Done</label>
                            </div>
                        </div>
                    </div>
                    <div className="inputRad">
                        <h2>Task's priority:</h2>
                        <div onChange={changePriority}>
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
                    <button className="sub" onClick={changeState}><b>CHANGE</b></button>
                    <button className="can" onClick={modalToggle}><b>CANCEL</b></button>
                </div>
            </div>
        </div>
    );
}
  
export default EditTask;