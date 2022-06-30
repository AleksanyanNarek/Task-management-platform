const mainState = [
    [
        [],
        [],
        [],
    ],
    [
        [],
        [],
        [],
    ],
    [
        [],
        [],
        [],
    ],
]

const addTaskReducer = (state=mainState, action) => {
    switch(action.type){
        case "ADD_TASK":
            return [ 
                state[0],
                state[1],
                state[2],
                state[action.payload.status][action.payload.priority].unshift(action.payload),
            ]
        case "DELETE_TASK":
            const rightArray = state[action.payload.status][action.payload.priority];
            const taskIndex = rightArray.findIndex((task) => (
                task.id === action.payload.id
            ));
            rightArray.splice(taskIndex, 1);
            return [
                ...state,
            ]
        default:
            return [
                ...state
            ]
    }

};

export default addTaskReducer;