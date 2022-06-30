import TaskCard from '../TaskCard';
import { useSelector } from 'react-redux';

const Done = () => {

    const doneTasks = useSelector((state) => state.mainState[2]); 
    
    return (
        <div className="tasks">
            <h2>Done</h2>
            <div className="high">
                {doneTasks[0].map((task) => (
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
                {doneTasks[1].map((task) => (
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
                {doneTasks[2].map((task) => (
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

export default Done;