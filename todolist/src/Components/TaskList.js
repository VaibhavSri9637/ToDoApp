import React from 'react'
import ReactDOM from 'react-dom'
import Task from './Task'
import {connect} from 'react-redux'
class TaskList extends React.Component{
    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task,index)=>
                        <Task key= {index} task= {task} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("state in map", state);
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, ()=>{})(TaskList)