import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../actions/'
class TaskBar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            message: ''
        } 
    }
    onAddClick(e){
        e.preventDefault();
        // console.log('hello entered')
        var input= this.refs.task.value;
        var tasks= this.props.tasks;
        // console.log("input", input);
        // console.log("tasks", tasks);
        // console.log("addTask", this.props.addTask);

        var c= 0;
        for(var i= 0; i<tasks.length;i++){
            if(input===tasks[i]){
                // console.log("c in if",c);    
                this.setState({message: 'This task is already present'})
                c=1;
                break;
            }
        }
        // console.log("c",c);
        if(c===0){
            this.props.addTask(input);
            this.setState({message: ''});
        }
    }
    // checkAlreadyPresent(){
    //     var tasks= this.props.tasks;
    //     var input= this.refs.task.val;
    //     console.log("tasks",tasks)
    //     console.log(tasks.length)
    //     for(var i= 0; i<tasks.length;i++){
    //         if(input===tasks[i]){
    //             this.setState({alreadyP: true})
    //             break;
    //         }
    //         this.setState({alreadyP: false})
    //     }
    // }
    render(){
        return (
            <div>
                <input type= "text" ref= "task" />
                {/* {this.checkAlreadyPresent()} */}
                <button onClick= {this.onAddClick.bind(this)}>Add Task</button>
                <p style= {{color: 'red', height: '15px', margin: '0', fontSize: '12px'}}>{this.state.message}</p>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);