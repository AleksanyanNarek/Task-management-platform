import { useDispatch } from 'react-redux';

const Nav = () => {

    const dispatch = useDispatch();
    const modalToggle = () => {
        document.body.style.overflow = "hidden";
        dispatch({type: "ADDING_TASK"});
    }

    return (
        <div className="nav">
            <div className="title">
                <h1>TASK MANAGEMENT PLATFORM</h1>
            </div>
            <div className="button">
                <button onClick={modalToggle}>
                    <h3>Add task</h3>
                </button>
            </div>
        </div>
    );
}
  
export default Nav;