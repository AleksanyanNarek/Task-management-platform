import TaskCard from '../TaskCard';
import { useSelector } from 'react-redux';

const Doing = () => {
    
    const doingTasks = useSelector((state) => state.mainState[1]);

    return (
        <div className="tasks">
            <h2>Doing</h2>
            <div className="high">
                {doingTasks[0].map((task) => (
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
                {doingTasks[1].map((task) => (
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
                {doingTasks[2].map((task) => (
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
  
export default Doing;