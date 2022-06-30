
export const deleteTasks = (statusId) => {

    return({
        type: "DELETE_TASK",
        payload: {
            status: statusId.status,
            priority: statusId.priority,
            id: statusId.id
        },
    });
};