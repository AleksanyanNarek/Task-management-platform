const addedData = {};

const addDataReducer = (state=addedData, action) => {
    switch(action.type){
        case "ADD_DATA":
            return action.payload
        default:
            return {
                ...state
            }
    }

};

export default addDataReducer;