
export const addTask = (submitedState) => {

    return({
        type: "ADD_TASK",
        payload: {
            title: submitedState.title,
            description: submitedState.description,
            priorityText: submitedState.priorityText,
            priority: submitedState.priority,
            status:submitedState.status,
            id: submitedState.id
        },
    });
};