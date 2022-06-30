

const addingTaskReducer = (state=false, action) => {
    switch(action.type){
        case "ADDING_TASK":
            return !state;
        default:
            return state;
    }

};

export default addingTaskReducer;