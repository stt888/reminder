import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from '../action-type'
import {bake_cookie, read_cookie} from 'sfcookies'

const reminders = (state = read_cookie('reminders')||[], action)=>{
    let reminders = null
    switch (action.type){
        case ADD_REMINDER:
            reminders =  [
                ...state,
            {text:action.text, dueDate:action.dueDate}
            ]
            bake_cookie('reminders', reminders)
            return reminders
        case REMOVE_REMINDER:
            reminders = state.filter((reminder,index)=>index!==action.id)
            bake_cookie('reminders', reminders)
            return reminders 
        case CLEAR_REMINDER:
            reminders = []
            bake_cookie('reminders', reminders)
            return reminders
        default: 
            return state
    }
}

export default reminders