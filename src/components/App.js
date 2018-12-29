import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addReminder, removeReminder,clearReminder} from '../actions'
import moment from 'moment'

class App extends Component {

  state = {
    text: '',
    dueDate: ''
  }

  addReminder=()=>{
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  removeReminder=(id)=>{
    this.props.removeReminder(id)
  }

  clearReminder=()=>{
    this.props.clearReminder()
  }

  render() {
    const {reminders} = this.props
    return (
      <div className="App">
        <div className='title'>Reminder Pro</div>
          <div className='form-inline'>
            <div className='form-group mr-2'>
              <input type='text' className='form-control' placeholder='I have to do...' onChange={(event)=>this.setState({text:event.target.value})}/>
              <input type='datetime-local' className='form-control' onChange={(event)=>this.setState({dueDate:event.target.value})}/>
            </div>
            <button type='button' className='btn btn-success' onClick={this.addReminder}>Add Reminder</button>
          </div>

        <ul className='list-group col-sm-8 mt-3'>
          {reminders.map((reminder, index)=>
            (
            <li className='list-group-item' key={index}>
            <div className='list-item'>
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
            </div>
            <div className='list-item delete' onClick={()=>this.removeReminder(index)}>&#x2715;</div>          
            </li>
            )
          )}
        </ul>

        <button type='button' className='btn btn-danger mt-3' onClick={this.clearReminder}>
            Clear Reminders
        </button>
      </div>
    )
  }
}

App.propTypes={
  addReminder: PropTypes.func.isRequired,
  removeReminder: PropTypes.func.isRequired,
  clearReminder: PropTypes.func.isRequired,
  reminders: PropTypes.array.isRequired
}

export default connect(
  state => ({reminders: state}),
  {addReminder, removeReminder, clearReminder}
)(App);
