import { combineReducers } from "redux";
import addingTaskReducer from './addingTaskReducer';
import editingTaskReducer from './editingTaskReducer';
import addTaskReducer from './addTaskReducer';
import addDataReducer from './addDataReducer';

const rootReducer = combineReducers({
    add: addingTaskReducer,
    editing: editingTaskReducer,
    mainState: addTaskReducer,
    changingData: addDataReducer,
});

export default rootReducer;