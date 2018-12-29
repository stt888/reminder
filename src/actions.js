import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from './action-type'



export const addReminder = (text, dueDate) => ({
    type: ADD_REMINDER,
    text,
    dueDate    
})

export const removeReminder = (id) => ({
    type: REMOVE_REMINDER,
    id
})

export const clearReminder = () => ({
    type: CLEAR_REMINDER,

})