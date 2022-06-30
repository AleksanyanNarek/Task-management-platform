

const editingTaskReducer = (state=false, action) => {
    switch(action.type){
        case "EDITING_TASK":
            return !state;
        default:
            return state;
    }

};

export default editingTaskReducer;