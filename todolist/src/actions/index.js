export function addTask(task){
    return {
        type: "ADD_TASK",
        payload: task
    }
}
export function deleteTask(taskId){
    return {
        type: "DELETE_TASK",
        payload: taskId
    }
}
export function changeTask(oldTask, newTask){
    return {
        type: "CHANGE_TASK",
        payload: {
            oldTask: oldTask,
            newTask: newTask
        }
    }
}