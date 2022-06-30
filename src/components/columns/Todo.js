import TaskCard from '../TaskCard';
import { useSelector } from 'react-redux';

const ToDo = () => {

    const toDoTasks = useSelector((state) => state.mainState[0]);

    return (
        <div className="tasks">
            <h2>To Do</h2>
            <div className="high">
                {toDoTasks[0].map((task) => (
                    <TaskCard 
                        title={task.title}
                        description={task.description}
                        priorityText={task.priorityText}
                        priority={task.priority}
                        status={task.status}
                        id={task.id}
                        key={task.id}
                    />
                ))}
            </div>
            <div className="normal">
                {toDoTasks[1].map((task) => (
                    <TaskCard 
                        title={task.title}
                        description={task.description}
                        priorityText={task.priorityText}
                        priority={task.priority}
                        status={task.status}
                        id={task.id}
                        key={task.id}
                    />
                ))}
            </div>
            <div className="low">
                {toDoTasks[2].map((task) => (
                    <TaskCard 
                        title={task.title}
                        description={task.description}
                        priorityText={task.priorityText}
                        priority={task.priority}
                        status={task.status}
                        id={task.id}
                        key={task.id}
                    />
                ))}
            </div>
        </div>
    );
}
  
export default ToDo;