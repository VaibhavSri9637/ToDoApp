import {combineReducers} from "redux"
import _ from 'lodash'

const tasksReducer=  (state= [], action) => {
    switch(action.type){
        case "ADD_TASK":
        var c= 0;
        for (var i= 0; i<=state.length; i++){
            if(state[i]===action.payload){
                alert('already found');
                c= 1;
                break;
            }
        }
        if(c===0){
            state=state.concat(action.payload);
        }
        break;
        case "DELETE_TASK":
        var c= 0;
        for (var i= 0; i<=state.length; i++){
            if(state[i]===action.payload){
                c= i;
                break;
            }
        }
        state= state.slice();
        state.splice(c,1);
        break;
        case "CHANGE_TASK":
        var c= 0;
        for (var i= 0; i<=state.length; i++){
            if(state[i]===action.payload.oldTask){
                c= i;
                break;
            }
        }
        state= state.slice();
        state.splice(c,1, action.payload.newTask);
        break;
    }
    console.log("state", state);
    return state;
},
reducers= combineReducers({tasks: tasksReducer});
export default reducers;