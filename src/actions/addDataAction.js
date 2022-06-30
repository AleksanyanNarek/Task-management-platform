
export const addData = (addingState) => {
    return({
        type: "ADD_DATA",
        payload: {
            title: addingState.title,
            description: addingState.description,
            priorityText: addingState.priorityText,
            priority: addingState.priority,
            status:addingState.status,
            id: addingState.id
        },
    });
};
