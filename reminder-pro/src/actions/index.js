import { ADD_REMINDER } from '../constants';

return const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log("In add reminder", addReminder);
  return action;
}
