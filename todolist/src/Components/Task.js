import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../actions/'
import {changeTask} from '../actions/'
class Task extends React.Component{
    constructor(){
        super();
        this.state= {
            isEditing: false
        }
    }
    onSaveClick(e){
        e.preventDefault();
        const oldTask= this.props.task;
        const newTask= this.refs.editInp.value;
        this.props.changeTask(oldTask, newTask);
        this.setState({isEditing: false})
    }
    onEditClick(e){
        e.preventDefault();
        this.setState({isEditing: true})
    }
    renderTask(){
        if(this.state.isEditing){
            return(
                <td style= {{width: '200px'}}>
                    <input type= "text" defaultValue= {this.props.task} ref= "editInp"/>
                </td>
            );
        }
        else{
            return(
                <td style= {{width: '200px'}}>
                    {this.props.task}
                </td>
            );
        }
    }
    renderButtons(){
        console.log('Entering here')
        if(this.state.isEditing){
            console.log('Entering if');
            return(
            <td>
                <button style= {{marginRight: '5px', color: 'green'}} onClick= {this.onSaveClick.bind(this)}>Save</button>
                <button style= {{marginRight: '5px', color: 'red'}} onClick= {()=>this.props.deleteTask(this.props.task)}>Delete</button>
            </td>);
        }
        else{
            console.log('Entering else');
            return(
                <td>
                <button style= {{marginRight: '5px', color: 'blue'}} onClick= {this.onEditClick.bind(this)}>Edit</button>
                <button style= {{marginRight: '5px', color: 'red'}} onClick= {()=>this.props.deleteTask(this.props.task)}>Delete</button>
            </td>
            );
        }
    }
    render(){
        console.log(this.props.key)
        return (
            <tr>
                {this.renderTask()}
                {this.renderButtons()}
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask, changeTask}, dispatch);
}

export default connect(()=>{}, mapDispatchToProps)(Task)